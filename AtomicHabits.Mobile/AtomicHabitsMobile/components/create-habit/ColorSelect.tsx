import React, { useState } from "react"
import { View, Text, TouchableOpacity } from 'react-native';
import { StyleSheet } from "react-native"
import ColorPicker from "./ColorPicker";

interface ColorSelectProps {
  color: string;
  onColorChanged: (color: string) => void;
  style?: any;
}

const ColorSelect = ({ color, onColorChanged, style }: ColorSelectProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  
  return (
    <View style={style}>
      <Text style={styles.label}>Color</Text>
      <TouchableOpacity style={styles.container} onPress={() => setModalVisible(true)}>
        <View>
          <View style={[styles.colorBox, !!color && { backgroundColor: color }]}/>            
        </View>
      </TouchableOpacity>
      <ColorPicker 
        color={color}
        visible={modalVisible} 
        onDismiss={() => setModalVisible(false)}
        onColorSelected={onColorChanged} />
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