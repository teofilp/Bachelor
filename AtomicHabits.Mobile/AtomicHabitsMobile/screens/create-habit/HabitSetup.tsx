import { useNavigation } from '@react-navigation/native';
import React, { PropsWithChildren, useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import ColorSelect from '../../components/create-habit/ColorSelect';
import IconSelect from '../../components/create-habit/IconSelect';
import TextInput from '../../components/TextInput';
import Colors from '../../constants/color';
import Field from '../../components/form/Field';
import { useForm } from 'react-hook-form';
import HabitFrequency from '../../components/create-habit/HabitFrequency';

const Section = ({ children }: PropsWithChildren<any>) => <View style={styles.section}>{children}</View>

const HabitSetup = () => {
  const navigation = useNavigation();
  const formMethods = useForm({
    defaultValues: {
      name: '',
      description: '',
      icon: null,
      color: Colors.MaximumPurple
    }
  });

  return (
    <View style={styles.root}>
      <ScrollView style={{ flex: 1 }}>
        <Section>
          <Field 
            control={formMethods.control}
            name="name"
            component={TextInput}
            placeholder="e.g. Custom habit" 
            label="Name"
          />
        </Section>
        <Section>
          <Field
            control={formMethods.control}
            component={TextInput}
            name="description"
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
            <Field 
              control={formMethods.control} 
              component={IconSelect} 
              name="icon"
              label="Icon" />
            <Field 
              control={formMethods.control}
              component={ColorSelect}
              name="color"
              label="Color" 
              style={{ marginLeft: 16 }} />
          </View>
        </Section>
        <Section>
          <View style={{ flexDirection: 'row'}}>
            <Field 
              control={formMethods.control}
              name="frequency"
              label="Frequency"
              component={HabitFrequency}
            />
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