import React, { useState } from "react"
import { View, Text, TouchableOpacity } from 'react-native';
import { StyleSheet } from "react-native"
import ColorPicker from "./ColorPicker";

interface ColorSelectProps {
  label: string;
  value: string;
  onValueChanged: (color: string) => void;
  style?: any;
}

const ColorSelect = ({ value, onValueChanged, style, label }: ColorSelectProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  
  return (
    <View style={style}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity style={styles.container} onPress={() => setModalVisible(true)}>
        <View>
          <View style={[styles.colorBox, !!value && { backgroundColor: value }]}/>            
        </View>
      </TouchableOpacity>
      <ColorPicker 
        color={value}
        visible={modalVisible} 
        onDismiss={() => setModalVisible(false)}
        onColorSelected={onValueChanged} />
    </View>
  )
}

export default ColorSelect;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    borderRadius: 4,
    backgroundColor: '#eee',
    marginTop: 4,
    width: 120,
    flex: 1
  },
  colorBox: {
    height: '100%',
    width: '100%',
    borderRadius: 4,
    backgroundColor: '#aaa'
  },
  label: {
    fontSize: 16
  }
});