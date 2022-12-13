import { useNavigation } from '@react-navigation/native';
import React, { PropsWithChildren, useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import ColorSelect from '../../components/create-habit/ColorSelect';
import IconSelect from '../../components/create-habit/IconSelect';
import TextInput from '../../components/TextInput';
import Colors from '../../constants/color';
import { Icon } from '../../models/icon';

const Section = ({ children }: PropsWithChildren<any>) => <View style={styles.section}>{children}</View>

const HabitSetup = () => {
  const navigation = useNavigation();
  const [icon, setIcon] = useState<Icon | null>(null);
  const [color, setColor] = useState<string>(Colors.MaximumPurple);

  useEffect(() => {
    // setTimeout(() => navigation.navigate(Route.Home as never), 1500)
  }, []);

  return (
    <View style={styles.root}>
      <ScrollView style={{ flex: 1 }}>
        <Section>
          <TextInput
            label="Name"
            placeholder="e.g. Custom habit" />
        </Section>
        <Section>
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
        </Section>
        <Section>
          <View style={{ flexDirection: 'row' }}>
            <IconSelect icon={icon} onIconChanged={setIcon} />
            <ColorSelect style={{ marginLeft: 16 }} color={color} onColorChanged={setColor} />
          </View>
        </Section>
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
  },
  section: {
    marginVertical: 16
  }
});