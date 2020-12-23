import React, { FC } from 'react';
import { Platform } from 'react-native';
import { WheelPickerProps } from './type';

import WheelPickerAndroid from './WheelPicker.android';
import WheelPickerIOS from './WheelPicker.ios';

const WheelCurvedPicker: FC<WheelPickerProps> = props => {
  if (Platform.OS === 'android') {
    return <WheelPickerAndroid {...props} />;
  } else if (Platform.OS === 'ios') {
    return <WheelPickerIOS {...props} />;
  }
  return null;
};
export default WheelCurvedPicker;
