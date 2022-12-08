import React, { useEffect, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { icons } from "../../assets/icons";
import Colors from "../../constants/color";
import { Icon } from "../../models/icon";
import Button from "../Button";
import CustomIcon from "../Icon";
import Modal from "../Modal";

interface IconPickerProps {
  visible: boolean;
  onIconSelected: (icon: Icon) => void;
  onDismiss: () => void;
}

const IconPicker = ({ visible, onIconSelected, onDismiss }: IconPickerProps) => {
  const [activeIcon, setActiveIcon] = useState<Icon | null>(null);
  const isIconActive = (icon: Icon) => icon.name == activeIcon?.name && 
    icon.type == activeIcon?.type

  useEffect(() => {
    setActiveIcon(null);
  }, [visible]);
  
  return (
    <Modal
      visible={visible}
      onDismiss={onDismiss}>
      <View style={{ height: 350 }}>
        <ScrollView>
          <View style={styles.iconsList}>
            {icons.map(icon => (
              <View key={`${icon.name}.${icon.type}`} style={styles.iconContainer}>
                <TouchableOpacity onPress={() => setActiveIcon(icon)}>
                  <CustomIcon icon={icon} size={28} color={isIconActive(icon) ? Colors.MaximumPurple : 'black'} />
                </TouchableOpacity>
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
          title="Close" />
        <Button title="Confirm" />
      </View>
    </Modal>
  );
}

export default IconPicker;

const styles = StyleSheet.create({
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  iconsList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  iconContainer: {
    padding: 6
  }
});