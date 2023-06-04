import React from 'react';
import {Button, Dimensions, SafeAreaView} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import Animated, {
  useSharedValue,
  useAnimatedProps,
  withTiming,
  withDelay,
  withRepeat,
} from 'react-native-reanimated';

export const screenWidth = Dimensions.get('window').width;
export const screenHeight = Dimensions.get('window').height;

const SIZE = screenWidth;
const AnimatedPath = Animated.createAnimatedComponent(Path);

const AnimationPractice = () => {
  const c1y = useSharedValue(0.2);
  const c2y = useSharedValue(0.8);

  const animatedProps = useAnimatedProps(() => {
    const path = [
      'M 0 0.5',
      `C 0.4 ${c1y.value}, 0.6 ${c2y.value}, 1 0.5`,
      'V 1',
      'H 0',
    ].join(' ');

    return {
      d: path,
    };
  });

  const handleWave = () => {
    c1y.value = withRepeat(withTiming(0.8, {duration: 500}), -1, true);
    c2y.value = withDelay(
      200,
      withRepeat(withTiming(0.2, {duration: 500}), -1, true),
    );
  };

  return (
    <SafeAreaView style={{alignItems: 'center', justifyContent: 'center'}}>
      <Button title="click me" onPress={handleWave} />
      <Svg style={{width: screenWidth, height: SIZE}} viewBox="0 0 1 1">
        <AnimatedPath fill={'blue'} animatedProps={animatedProps} />
      </Svg>
    </SafeAreaView>
  );
};

export default AnimationPractice;
