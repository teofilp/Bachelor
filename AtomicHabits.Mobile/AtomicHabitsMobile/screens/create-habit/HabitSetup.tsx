import React, { PropsWithChildren, useContext, useEffect, } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import ColorSelect from '../../components/create-habit/ColorSelect';
import IconSelect from '../../components/create-habit/IconSelect';
import TextInput from '../../components/TextInput';
import Colors from '../../constants/color';
import Field from '../../components/form/Field';
import { useForm, FormProvider } from 'react-hook-form';
import HabitFrequencyComponent from '../../components/create-habit/habit-frequency';
import { HabitFrequency } from '../../models/habitFrequency';
import ColorThemeContextProvider, { ColorThemeContext } from '../../context/colorThemeContext';
import { useColorThemeHeader } from '../../hooks/useColorThemeHeader';
import { RouteProp, useRoute } from '@react-navigation/native';
import { ParamsList } from '../../types/routeParams';
import HabitTriggerComponent from '../../components/create-habit/habit-trigger-type-select';
import HabitTriggerSection from '../../components/create-habit/sections/HabitTrigger';
import { HabitTrigger } from '../../models/habitTrigger';

export const Section = ({ children }: PropsWithChildren<any>) => <View style={styles.section}>{children}</View>

const defaultHabit = {
  name: '',
  description: '',
  icon: null as any,
  color: Colors.MaximumPurple,
  frequency: {
    type: HabitFrequency.Daily,
    weekDays: [],
    monthDays: []
  },
  trigger: HabitTrigger.Reminder,
  triggerSource: null
};

const HabitSetupContent = () => {
  const route = useRoute<RouteProp<ParamsList, "HabitSetup">>();
  const { setColor } = useContext(ColorThemeContext);
  const defaultValues = route.params ? {
    ...defaultHabit,
    ...route.params
  } : defaultHabit;

  const formMethods = useForm({
    defaultValues
  });
  useColorThemeHeader();

  useEffect(() => {
    if (!route.params) return;

    setColor(route.params.color!);
  }, [route.params]);

  return (
    <View style={styles.root}>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
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
          <HabitTriggerSection />
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