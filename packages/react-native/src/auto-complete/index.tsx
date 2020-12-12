import React, { useEffect, useRef } from 'react';
import {
  TextInput,
  View,
  StyleProp,
  ViewStyle,
  FlatList,
  TouchableOpacity,
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
} from 'react-native';
import { useTheme } from '@shopify/restyle';

import Box from '../box';
import Input from '../input';
import Text from '../text';
import Portal from '../portal';
import { ONE_PIXEL } from '../helper';
import { Theme } from '../config/theme';

export type Item = {
  key: number;
  title: string;
};
export interface AutoCompleteProps {
  /** 待选项容器高度 */
  dropdownHeight?: number;
  /** 待选项容器样式 */
  dropdownContainerStyle?: StyleProp<ViewStyle>;
  /** 值 */
  value?: string;
  /** 值改变回调 */
  onChange?: (value?: string) => void;
  /** 待选项数组 */
  options?: Item[];
  /** 选中一个待选项 */
  onSelect: (value: string) => void;
  /** 点击软键盘确认键的回调 */
  onSubmitEditing?: (e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void;
}

const { InputItem } = Input;
function AutoComplete({
  dropdownHeight,
  dropdownContainerStyle,
  value = '',
  onChange,
  options = [],
  onSelect,
  onSubmitEditing,
}: AutoCompleteProps) {
  const theme = useTheme<Theme>();
  const inputRef = useRef<TextInput>(null);
  const keyRef = useRef(-1);
  const dataRef = useRef<Item[]>([]);

  useEffect(() => {
    dataRef.current = options;
  }, [options]);

  /** 显示dropdown视图 */
  const show = (text: string) => {
    if (inputRef.current) {
      inputRef.current.measure((_, __, width, height, pageX, pageY) => {
        const data = text === '' ? dataRef.current : dataRef.current.filter(item => item.title.includes(text));
        const content = renderDropdownList(data, width, height, pageX, pageY);
        if (keyRef.current === -1) {
          keyRef.current = Portal.add(content);
        } else {
          Portal.update(keyRef.current, content);
        }
      });
    }
  };

  /** 关闭dropdown视图 */
  const hide = () => {
    Portal.remove(keyRef.current);
    keyRef.current = -1;
  };

  /** 渲染dropdown视图 */
  const renderDropdownList = (data: Item[], width: number, height: number, x: number, y: number) => {
    return (
      <View
        style={[
          {
            position: 'absolute',
            top: y + height,
            left: x,
            width,
            height: dropdownHeight,
            backgroundColor: theme.colors.backgroundColor1,
          },
          dropdownContainerStyle,
        ]}
      >
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                onSelect(item.title);
                hide();
              }}
            >
              <Box paddingVertical="s" paddingLeft="s" borderBottomWidth={ONE_PIXEL} borderColor="borderColor">
                <Text>{item.title}</Text>
              </Box>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.key.toString()}
          bounces={false}
          keyboardShouldPersistTaps="handled"
        />
      </View>
    );
  };

  return (
    <InputItem
      ref={inputRef}
      value={value}
      onFocus={() => show(value)}
      onBlur={hide}
      onChange={value => {
        onChange?.(value);
        show(value);
      }}
      onClose={() => {
        onChange?.('');
        inputRef.current?.blur();
      }}
      onSubmitEditing={(e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => {
        hide();
        onSubmitEditing?.(e);
      }}
    />
  );
}

export default AutoComplete;
