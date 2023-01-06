import React, { useState } from "react"
import { View, Text, TouchableOpacity } from 'react-native';
import { StyleSheet } from "react-native"
import Colors from "../../constants/color";
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
  
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity style={styles.container} onPress={() => setModalVisible(true)}>
        <View>
          <CustomIcon icon={value} color={Colors.MaximumPurple} size={24} />
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
    paddingHorizontal: 48,
    paddingVertical: 8,
    borderRadius: 4,
    backgroundColor: '#eee',
    marginTop: 4,
    width: 120
  },
  label: {
    fontSize: 16
  }
});