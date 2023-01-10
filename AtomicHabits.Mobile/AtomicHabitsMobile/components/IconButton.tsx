import React from 'react';
import { TouchableOpacity } from "react-native"
import CustomIcon, { CustomIconProps } from "./Icon"

interface IconButtonProps extends CustomIconProps {
  onPress?: () => void;
  style?: any;
}

const IconButton = ({ onPress, style, ...rest }: IconButtonProps) => (
  <TouchableOpacity onPress={onPress} style={style}>
    <CustomIcon {...rest} />
  </TouchableOpacity>
);

export default IconButton;