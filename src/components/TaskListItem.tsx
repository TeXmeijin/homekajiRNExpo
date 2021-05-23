import * as React from 'react';
import {
  ActivityIndicator,
  Animated,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  ViewStyle,
  TextStyle,
  ImageStyle,
} from 'react-native';
import { COLORS } from '../constants/COLORS';
import { Task } from '../types/task';

export const TaskListItem = (props: {
  task: Task;
  fadeAnim: Animated.Value;
  isSaving: boolean;
  onPress: () => void;
}) => (
  <Pressable onPress={props.onPress} style={itemStyle}>
    <Text
      style={{
        color: COLORS.primaryTextColor,
        fontSize: 24,
        fontWeight: '500',
        lineHeight: 32,
      }}>
      {props.task.name}
    </Text>
    <View style={style.statuses}>
      <ActivityIndicator
        style={style.status}
        size="large"
        color="#999"
        animating={props.isSaving}
      />
      <Animated.View style={{ ...style.check, ...style.status, opacity: props.fadeAnim }}>
        <Image
          style={{ width: 48, height: 48 }}
          resizeMode="contain"
          source={require('../assets/checked.png')}
        />
      </Animated.View>
    </View>
  </Pressable>
);

const itemStyle: (arg: { pressed: boolean }) => ViewStyle | TextStyle | ImageStyle = ({
  pressed,
}) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingVertical: 28,
  borderBottomWidth: 1,
  borderBottomColor: COLORS.primaryLighten1,
  borderStyle: 'solid',
  backgroundColor: pressed ? COLORS.primaryLighten1 : 'transparent',
});

const style = StyleSheet.create({
  statuses: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  status: {
    position: 'absolute',
    right: 16,
    top: -16,
  },
  check: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
