import React, { useContext, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Colors from '../../constants/color';
import { ColorThemeContext } from '../../context/colorThemeContext';
import { MY_HABITS } from '../../data/my-habits';
import { HabitInfo } from "../../models/habitInfo"
import Button from '../Button';
import Modal from "../Modal";
import Radio from '../shared/Radio';
import Text from '../Text';

interface HabitTriggerPickerProps {
  habit: HabitInfo | null;
  onHabitSelected: (item: HabitInfo | null) => void;
  onDismiss: () => void;
  visible: boolean;
  items?: HabitInfo[];
}

const HabitTriggerPicker = ({ habit, onDismiss, onHabitSelected, visible, items = MY_HABITS }: HabitTriggerPickerProps) => {
  const { color } = useContext(ColorThemeContext);
  const [activeHabit, setActiveHabit] = useState(habit);

  const handleConfirm = () => {
    onHabitSelected(activeHabit);
    onDismiss();
  };

  const renderItem = (item: HabitInfo) => {
    const isChecked = activeHabit == item;

    return (
      <View style={styles.itemContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{item.name}</Text>
        </View>
        <Radio color={color} checked={isChecked} onPress={() => setActiveHabit(item)}/>
      </View>
    )
  }

  return (
    <Modal visible={visible} onDismiss={onDismiss}>
      <View style={styles.root}>
        <FlatList 
          showsVerticalScrollIndicator={false}
          data={items} 
          key='id' 
          renderItem={(itemData) => renderItem(itemData.item)} />
      </View>
      <View style={styles.actionsContainer}>
        <Button
          style={{
            backgroundColor: Colors.MaximumPurple01
          }}
          textStyle={{
            color: color
          }}
          title="Close"
          onPress={onDismiss} />
        <Button 
          title="Confirm" 
          onPress={handleConfirm}
          style={{ backgroundColor: color }} />
      </View>
    </Modal>
  )
};

export default HabitTriggerPicker;

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: 300
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 12
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 4,
    margin: 4
  },
  nameContainer: {
    flex: 1
  },
  name: {
    fontSize: 16
  }
});