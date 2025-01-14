import React, { FC } from 'react';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import { mix } from 'react-native-redash';

import { useTheme } from '@shopify/restyle';

import SvgIcon from '../svg-icon';
import { Theme } from '../theme';

const Chevron: FC<{ progress: Animated.SharedValue<number> }> = ({ progress }) => {
  const theme = useTheme<Theme>();
  const style = useAnimatedStyle(() => ({
    transform: [{ rotateZ: `${mix(progress.value, 0, Math.PI / 2)}rad` }],
  }));

  return (
    <Animated.View style={style}>
      <SvgIcon name="right" color={theme.colors.gray500} />
    </Animated.View>
  );
};

export default Chevron;
