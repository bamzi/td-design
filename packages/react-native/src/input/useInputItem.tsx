import React from 'react';
import { useCreation, useLatest, useMemoizedFn, useSafeState, useUpdateEffect } from '@td-design/rn-hooks';
import { useAnimatedStyle, withTiming } from 'react-native-reanimated';

import Flex from '../flex';
import Text from '../text';
import type { InputItemProps } from './InputItem';

export default function useInputItem({
  inputType,
  label,
  value,
  onChange,
  onClear,
  colon = false,
  required = false,
}: Pick<InputItemProps, 'inputType' | 'label' | 'value' | 'onChange' | 'onClear' | 'colon' | 'required'>) {
  const [inputValue, setInputValue] = useSafeState(value);
  const [eyeOpen, setEyeOpen] = useSafeState(inputType === 'password');

  const onChangeRef = useLatest(onChange);
  const onClearRef = useLatest(onClear);

  useUpdateEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleInputClear = () => {
    setInputValue('');
    onChangeRef.current?.('');
    onClearRef.current?.();
  };

  const handleChange = (val: string) => {
    setInputValue(val);
    onChangeRef.current?.(val);
  };

  const triggerPasswordType = () => {
    setEyeOpen(!eyeOpen);
  };

  const LabelComp = useCreation(() => {
    if (label) {
      if (typeof label === 'string') {
        return (
          <Flex marginHorizontal="x2">
            {required && (
              <Text color="func600" paddingTop="x2">
                *{' '}
              </Text>
            )}
            <Text variant="p0" color="gray500">
              {label}
            </Text>
            {colon && <Text> :</Text>}
          </Flex>
        );
      }
      return (
        <Flex marginHorizontal="x2">
          {required && (
            <Text color="func600" paddingTop="x2">
              {' '}
              *
            </Text>
          )}
          {label}
          {colon && <Text> :</Text>}
        </Flex>
      );
    }
    return null;
  }, [colon, label, required]);

  const clearIconStyle = useAnimatedStyle(() => {
    return {
      width: !!inputValue ? withTiming(24) : withTiming(0),
    };
  });

  return {
    LabelComp,
    inputValue,
    eyeOpen,
    clearIconStyle,
    handleChange: useMemoizedFn(handleChange),
    handleInputClear: useMemoizedFn(handleInputClear),
    triggerPasswordType: useMemoizedFn(triggerPasswordType),
  };
}
