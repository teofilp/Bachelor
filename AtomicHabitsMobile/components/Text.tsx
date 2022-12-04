import React from 'react';
import { useFonts } from 'expo-font';
import { PropsWithChildren } from 'react'
import { Text as RnText, TextProps } from 'react-native'

interface CustomTextProps extends TextProps {
  fontWeightStyle?: 'regular' | 'bold' | 'italic' | 'thin';
}

const Text = ({ 
  children, 
  style, 
  fontWeightStyle = 'regular', 
  ...props 
}: PropsWithChildren<CustomTextProps>) => {
  const [fontsLoaded] = useFonts({
    'roboto_regular': require('../assets/fonts/Roboto-Regular.ttf'),
    'roboto_bold': require('../assets/fonts/Roboto-Bold.ttf'),
    'roboto_italic': require('../assets/fonts/Roboto-Italic.ttf'),
    'roboto_thin': require('../assets/fonts/Roboto-Thin.ttf')
  });
  const textStyle = fontsLoaded ? [{ fontFamily: `roboto_${fontWeightStyle}` }, style] : style;

  return (
    <RnText {...props} style={textStyle}>{children}</RnText>
  );
}

export default Text;