import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../../constants/color';

interface RadioProps {
  checked?: boolean;
  size?: number;
  color?: string;
  onPress?: (checked: boolean) => void;
}

const Radio = ({ checked = false, size = 14, color = Colors.MaximumPurple, onPress }: RadioProps) => {
  return (
    <TouchableOpacity style={styles.root} onPress={() => onPress?.(!checked)}>
      <View 
        style={[styles.outer, {
          borderColor: checked ? color : '#bbb',
        }]}>
        <View 
          style={[styles.inner, {
            backgroundColor: checked ? color : '#bbb',
            width: size,
            height: size
          }]} />
      </View>
    </TouchableOpacity>
  )
};

export default Radio;

const styles = StyleSheet.create({ 
  root: {
    flexDirection: 'row'
  },
  outer: {
    padding: 4,
    borderRadius: 50,
    borderWidth: 3
  },
  inner: {
    borderRadius: 50
  }
});