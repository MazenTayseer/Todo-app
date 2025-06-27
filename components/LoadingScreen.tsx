import { loadingScreenStyles } from '@/styles/loading-screen';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import Animated, {
    runOnJS,
    useAnimatedStyle,
    useSharedValue,
    withTiming
} from 'react-native-reanimated';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const opacity = useSharedValue(0);
  const scale = useSharedValue(0.8);

  useEffect(() => {
    opacity.value = withTiming(1, { duration: 800 });
    scale.value = withTiming(1, { duration: 800 });

    const timer = setTimeout(() => {
      opacity.value = withTiming(0, { duration: 600 }, (finished) => {
        if (finished) {
          runOnJS(onLoadingComplete)();
        }
      });
      scale.value = withTiming(1.1, { duration: 600 });
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ scale: scale.value }],
  }));

  return (
    <View style={loadingScreenStyles.container}>
      <Animated.View style={[loadingScreenStyles.content, animatedStyle]}>
        <Text style={loadingScreenStyles.title}>Todo App</Text>
        <Text style={loadingScreenStyles.subtitle}>Get things done</Text>
      </Animated.View>
    </View>
  );
}
