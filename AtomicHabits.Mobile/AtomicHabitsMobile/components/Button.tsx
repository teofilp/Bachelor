import React from 'react';
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Colors from '../constants/color';
import Text from "./Text";

interface ButtonProps {
  onPress?: () => void;
  title: string;
  style?: any;
  textStyle?: any;
}

const Button = ({ onPress, title, style, textStyle }: ButtonProps) => (
  <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
    <Text style={[styles.text, textStyle]}>{title}</Text>
  </TouchableOpacity>
);

export default Button;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 32,
    borderRadius: 8,
    backgroundColor: Colors.MaximumPurple,
  },
  text: {
    color: 'white'
  }
});