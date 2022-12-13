import React, { useState } from "react"
import { View, Text, TouchableOpacity } from 'react-native';
import { StyleSheet } from "react-native"
import Colors from "../../constants/color";
import { Icon } from "../../models/icon";
import CustomIcon from "../Icon";
import IconPicker from "./IconPicker"

interface IconSelectProps {
  icon: Icon | null;
  onIconChanged: (icon: Icon) => void;
}

const IconSelect = ({ icon, onIconChanged }: IconSelectProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  
  return (
    <View>
      <Text style={styles.label}>Icon</Text>
      <TouchableOpacity style={styles.container} onPress={() => setModalVisible(true)}>
        <View>
          <CustomIcon icon={icon} color={Colors.MaximumPurple} size={24} />
        </View>
      </TouchableOpacity>
      <IconPicker 
        icon={icon}
        visible={modalVisible} 
        onDismiss={() => setModalVisible(false)}
        onIconSelected={onIconChanged} />
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