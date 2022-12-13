import React from 'react';
import { getIcon } from "../mappers/icon";
import { Icon } from "../models/icon";
import { IconType } from '../models/iconType';

interface CustomIconProps {
  icon?: Icon | null;
  size?: number;
  color?: string;
}

const defaultIcon: Icon = {
  name: 'ios-help-outline',
  type: IconType.Ionicons
}

const CustomIcon = ({ icon, ...rest }: CustomIconProps) => {
  const IconComponent = getIcon(icon?.type ?? defaultIcon.type);

  return <IconComponent {...rest} name={icon?.name ?? defaultIcon.name} />
}

export default CustomIcon;