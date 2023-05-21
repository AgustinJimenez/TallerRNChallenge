import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

export const useScreenRotateAnimationStyle = () => {
  const screenRotationX = useSharedValue(0);
  const screenRotationY = useSharedValue(0);
  const screenRotationZ = useSharedValue(0);
  const style = useAnimatedStyle(() => ({
    transform: [
      {translateX: screenRotationX.value * 255},
      {translateY: screenRotationY.value * 255},
      {rotateZ: `${screenRotationZ.value}deg`},
    ],
  }));
  const onEnter = () => {
    screenRotationX.value = withTiming(0.2);
    screenRotationY.value = withTiming(0.2);
    screenRotationZ.value = withTiming(-12);
  };

  const onClose = () => {
    screenRotationX.value = withTiming(0);
    screenRotationY.value = withTiming(0);
    screenRotationZ.value = withTiming(0);
  };
  const result = [style, onEnter, onClose];
  return result;
};

export const useMarginTopAnimation = () => {
  const marginTop = useSharedValue(0);
  const onEnter = () => {
    marginTop.value = withTiming(70, {duration: 300});
  };

  const onClose = () => {
    marginTop.value = withTiming(0, {duration: 300});
  };

  const style = useAnimatedStyle(() => {
    return {
      marginTop: marginTop.value,
    };
  });

  const result = [style, onEnter, onClose];
  return result;
};
