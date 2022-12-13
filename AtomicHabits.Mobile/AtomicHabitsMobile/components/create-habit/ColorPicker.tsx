import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import Colors from "../../constants/color";
import { generatedColors } from '../../utils/colors';
import Button from "../Button";
import Modal from "../Modal";

interface ColorPickerProps {
  color: string;
  visible: boolean;
  onColorSelected: (color: string) => void;
  onDismiss: () => void;
}

const ColorPicker = ({ color, visible, onColorSelected, onDismiss }: ColorPickerProps) => {
  const [activeColor, setActiveColor] = useState<string>(color);
  const isColorActive = (color: string) => color === activeColor;
  
  useEffect(() => {
    setActiveColor(color);
  }, [visible, color]);

  const handleConfirm = () => {
    onColorSelected(activeColor);
    onDismiss();
  }
  
  return (
    <Modal
      visible={visible}
      onDismiss={onDismiss}>
      <View>
        <ScrollView>
          <View style={styles.colorsList}>
            {generatedColors.map(colorCategory => (
              <View key={colorCategory.join('')} style={styles.colorsContainer}>
                {colorCategory.map(color => (
                  <TouchableOpacity onPress={() => onColorSelected(color)} style={[styles.colorBoxContainer, isColorActive(color) && styles.colorBoxContainerActive]}>
                    <View style={[styles.colorBox, { backgroundColor: color }, isColorActive(color) && styles.colorBoxActive]}/>
                  </TouchableOpacity>
                ))}
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
      <View style={styles.actionsContainer}>
        <Button
          style={{
            backgroundColor: Colors.MaximumPurple01
          }}
          textStyle={{
            color: Colors.MaximumPurple
          }}
          title="Close"
          onPress={onDismiss} />
        <Button title="Confirm" onPress={handleConfirm}/>
      </View>
    </Modal>
  );
}

export default ColorPicker;

const styles = StyleSheet.create({
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 12
  },
  colorsList: {
    justifyContent: 'space-between'
  },
  colorsContainer: {
    flex: 1,
    marginVertical: 6,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between'
  },
  colorBoxContainer: {
    padding: 6, 
    backgroundColor: '#eee', 
    marginHorizontal: 4, 
    flex: 1, 
    height: 50, 
    borderRadius: 4,
  },
  colorBox: {  
    width: '100%', 
    height: '100%', 
    borderRadius: 4
  },
  colorBoxContainerActive: {
    padding: 0,
    borderWidth: 6,
    borderRadius: 6,
    borderColor: Colors.MaximumPurple
  },
  colorBoxActive: {
    borderRadius: 0
  }
});