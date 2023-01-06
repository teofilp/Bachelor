import React, { useContext, useState } from "react"
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ColorThemeContext } from "../../context/colorThemeContext";
import ColorPicker from "./ColorPicker";

interface ColorSelectProps {
  label: string;
  value: string;
  onValueChanged: (color: string) => void;
  style?: any;
}

const ColorSelect = ({ value, onValueChanged, style, label }: ColorSelectProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { setColor } = useContext(ColorThemeContext);

  const colorSelectedHandler = (color: string) => {
    onValueChanged(color);
    setColor(color);
  }
  
  return (
    <View style={[{ flex: 1 }, style]}>
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
        onColorSelected={colorSelectedHandler} />
    </View>
  );
};

export default ColorSelect;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    borderRadius: 4,
    backgroundColor: '#eee',
    marginTop: 4,
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