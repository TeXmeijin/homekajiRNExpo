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


const TaskWithRecord = (props: PropsWithChildren<{}>) => {
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
      <Text style={{color: '#433319', fontSize: 28, fontWeight: '100', lineHeight: 40}}>
        {props.children}
      </Text>
      <View style={style.statuses}>
        <ActivityIndicator style={style.status} size='large' color='#999' animating={isSaving}/>
        <Animated.View style={{...style.check, ...style.status, opacity: fadeAnim}}>
          <Image width={32} height={32} source={require('../assets/840_ch_f.png')}/>
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
    width: 40,
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
    paddingVertical: 32,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    borderStyle: 'solid',
    backgroundColor: pressed ? '#efe3af' : 'transparent'
  }
}

export default TaskWithRecord
