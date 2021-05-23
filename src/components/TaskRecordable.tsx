import {
  ActivityIndicator,
  Animated,
  ImageStyle,
  Pressable,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
  Image
} from "react-native";
import React, {PropsWithChildren, useEffect, useRef, useState} from "react";
import {COLORS} from "../constants/COLORS";
import {Task} from "../types/task";

const TaskRecordable = (props: PropsWithChildren<{ task: Task }>) => {
  const [isSaving, setIsSaving] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)

  const fadeAnim = useRef(new Animated.Value(0)).current
  useEffect(() => {
    if (isCompleted) {
      Animated.timing(
        fadeAnim,
        {
          toValue: 1,
          duration: 200,
          useNativeDriver: false,
        }
      ).start();
    } else {
      Animated.timing(
        fadeAnim,
        {
          toValue: 0,
          duration: 200,
          useNativeDriver: false,
        }
      ).start();
    }
  }, [isCompleted])

  const onPress = () => {
    if (isSaving || isCompleted) return
    setIsSaving(true)

    setTimeout(() => {
      setIsSaving(false)
      setIsCompleted(true)

      setTimeout(() => {
        setIsCompleted(false)
      }, 400)
    }, 200)
  }

  return (
    <Pressable style={itemStyle} onPress={onPress}>
      <Text style={{color: COLORS.primaryTextColor, fontSize: 24, fontWeight: '500', lineHeight: 32}}>
        {props.task.name}
      </Text>
      <View style={style.statuses}>
        <ActivityIndicator style={style.status} size='large' color='#999' animating={isSaving}/>
        <Animated.View style={{...style.check, ...style.status, opacity: fadeAnim}}>
          <Image style={{width: 48, height: 48}} resizeMode='contain' source={require('../assets/checked.png')}/>
        </Animated.View>
      </View>
    </Pressable>
  )
}

const style = StyleSheet.create({
  statuses: {
    flexDirection: "row",
    alignItems: "center",
  },
  status: {
    position: "absolute",
    right: 16,
    top: -16,
  },
  check: {
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center"
  }
})

const itemStyle: (arg: { pressed: boolean }) => ViewStyle | TextStyle | ImageStyle = ({pressed}) => {
  return {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 28,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.primaryLighten1,
    borderStyle: 'solid',
    backgroundColor: pressed ? COLORS.primaryLighten1 : 'transparent'
  }
}

export default TaskRecordable
