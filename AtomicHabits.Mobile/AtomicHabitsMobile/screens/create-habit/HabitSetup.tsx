import React, { PropsWithChildren, useEffect, } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import ColorSelect from '../../components/create-habit/ColorSelect';
import IconSelect from '../../components/create-habit/IconSelect';
import TextInput from '../../components/TextInput';
import Colors from '../../constants/color';
import Field from '../../components/form/Field';
import { useForm, FormProvider } from 'react-hook-form';
import HabitFrequencyComponent from '../../components/create-habit/habit-frequency';
import { HabitFrequency } from '../../models/habitFrequency';
import ColorThemeContextProvider from '../../context/colorThemeContext';
import { useColorThemeHeader } from '../../hooks/useColorThemeHeader';

const Section = ({ children }: PropsWithChildren<any>) => <View style={styles.section}>{children}</View>

const HabitSetupContent = () => {
  const formMethods = useForm({
    defaultValues: {
      name: '',
      description: '',
      icon: null,
      color: Colors.MaximumPurple,
      frequency: {
        type: HabitFrequency.Daily,
        weekDays: [],
        monthDays: []
      }
    }
  });
  useColorThemeHeader();

  useEffect(() => {
    formMethods.setValue('frequency.monthDays', []);
    formMethods.setValue('frequency.weekDays', []);
  }, [formMethods.watch('frequency.type')]);

  return (
    <View style={styles.root}>
      <ScrollView style={{ flex: 1 }}>
        <FormProvider {...formMethods}>
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
              <View style={{ flex: 1 }}>
                <Field 
                  control={formMethods.control} 
                  component={IconSelect} 
                  name="icon"
                  label="Icon" />
              </View>
              <View style={{ flex: 1, marginHorizontal: 16 }}>
                <Field 
                  control={formMethods.control}
                  component={ColorSelect}
                  name="color"
                  label="Color" />
              </View>
              <View style={{flex: 1}} />
            </View>
          </Section>
          <Section>
            <View style={{ flexDirection: 'row'}}>
              <Field 
                control={formMethods.control}
                name="frequency.type"
                label="Frequency"
                component={HabitFrequencyComponent}
              />
            </View>
          </Section>
        </FormProvider>
      </ScrollView>
    </View>
  )
}

const HabitSetup = () => (
  <ColorThemeContextProvider>
    <HabitSetupContent />
  </ColorThemeContextProvider>
)

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