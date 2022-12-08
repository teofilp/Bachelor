import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { icons } from '../../assets/icons';
import Button from '../../components/Button';
import IconPicker from '../../components/create-habit/IconPicker';
import CustomIcon from '../../components/Icon';
import Modal from '../../components/Modal';
import Text from '../../components/Text';
import TextInput from '../../components/TextInput';
import Colors from '../../constants/color';

const HabitSetup = () => {
  const navigation = useNavigation();
  const [show, setShow] = useState(false);

  useEffect(() => {
    // setTimeout(() => navigation.navigate(Route.Home as never), 1500)
  }, []);

  return (
    <View style={styles.root}>
      <ScrollView style={{ flex: 1 }}>
        <TextInput
          label="Name"
          placeholder="e.g. Custom habit" />
        <TextInput
          label="Description"
          placeholder="e.g. A short description"
          textAlignVertical="top"
          multiline
          style={{
            flex: 1,
            height: 140
          }}
          />
        <Button title='modal' onPress={() => setShow(true)} />
        <IconPicker visible={show} onDismiss={() => setShow(false)} onIconSelected={() => {}} />
      </ScrollView>
    </View>
  )
}

export default HabitSetup;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 8
  }
});