import React, { useContext, useState } from "react"
import { View, Text, TouchableOpacity } from 'react-native';
import { StyleSheet } from "react-native"
import Colors from "../../constants/color";
import { ColorThemeContext } from "../../context/colorThemeContext";
import { Icon } from "../../models/icon";
import CustomIcon from "../Icon";
import IconPicker from "./IconPicker"

interface IconSelectProps {
  label: string;
  value: Icon | null;
  onValueChanged: (icon: Icon) => void;
}

const IconSelect = ({ value, onValueChanged, label }: IconSelectProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { color } = useContext(ColorThemeContext);

  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity style={styles.container} onPress={() => setModalVisible(true)}>
        <View>
          <CustomIcon icon={value} color={color} size={24} />
        </View>
      </TouchableOpacity>
      <IconPicker 
        icon={value}
        visible={modalVisible} 
        onDismiss={() => setModalVisible(false)}
        onIconSelected={onValueChanged} />
    </View>
  )
}

export default IconSelect;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
    borderRadius: 4,
    backgroundColor: '#eee',
    marginTop: 4,
  },
  label: {
    fontSize: 16
  }
});