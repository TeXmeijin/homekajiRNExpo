import { useEffect, useRef, useState } from 'react';
import { Animated } from 'react-native';

export const useFadeAnimation = () => {
  const [isSaving, setIsSaving] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    if (isCompleted) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start();
    }
  }, [isCompleted]);

  const onPress = () => {
    if (isSaving || isCompleted) return;
    setIsSaving(true);

    setTimeout(() => {
      setIsSaving(false);
      setIsCompleted(true);

      setTimeout(() => {
        setIsCompleted(false);
      }, 400);
    }, 200);
  };

  return {
    isSaving,
    fadeAnim,
    onPress,
  };
};
