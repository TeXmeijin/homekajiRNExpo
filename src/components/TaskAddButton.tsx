import {Image, ImageStyle, Pressable, StyleSheet, TextStyle, ViewStyle} from "react-native";
import React from "react";
import {COLORS} from "../constants/COLORS";

const TaskAddButton: React.VFC<{ style: ViewStyle | TextStyle | ImageStyle }> = (props) => {
  return (
    <Pressable style={{...styles.button, ...props.style}}>
      <Image style={{width: 48, height: 48}} resizeMode='contain' source={require('src/assets/add.png')}/>
    </Pressable>
  )
}

export default TaskAddButton

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.accent,
    padding: 12,
    borderRadius: 50
  }
})
