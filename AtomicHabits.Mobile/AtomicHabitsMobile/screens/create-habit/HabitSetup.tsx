import React, { PropsWithChildren, useContext, useEffect, } from 'react';
import { View, StyleSheet, ScrollView, KeyboardAvoidingView } from 'react-native';
import { useHeaderHeight } from '@react-navigation/elements';
import { useForm, FormProvider } from 'react-hook-form';
import { RouteProp, useRoute } from '@react-navigation/native';

import ColorSelect from '../../components/create-habit/ColorSelect';
import IconSelect from '../../components/create-habit/IconSelect';
import TextInput from '../../components/TextInput';
import Field from '../../components/form/Field';
import ColorThemeContextProvider, { ColorThemeContext } from '../../context/colorThemeContext';
import { useColorThemeHeader } from '../../hooks/useColorThemeHeader';
import { ParamsList } from '../../types/routeParams';
import HabitTriggerSection from '../../components/create-habit/sections/HabitTrigger';
import { getDefaultHabit } from '../../helpers/create-habit';

export const Section = ({ children }: PropsWithChildren<any>) => <View style={styles.section}>{children}</View>

const HabitSetupContent = () => {
  const route = useRoute<RouteProp<ParamsList, "HabitSetup">>();
  const { setColor } = useContext(ColorThemeContext);
  const defaultValues = route.params ? {
    ...getDefaultHabit(),
    ...route.params
  } : getDefaultHabit();

  const formMethods = useForm({
    defaultValues
  });

  const headerHeight = useHeaderHeight();

  useColorThemeHeader();

  useEffect(() => {
    if (!route.params) return;

    setColor(route.params.color!);
  }, [route.params]);

  return (
    <View style={styles.root}>
      <KeyboardAvoidingView  
        style={{ flex: 1 }} 
        behavior='padding' 
        keyboardVerticalOffset={3*headerHeight}>
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          <FormProvider {...formMethods}>
            <Section>
              <Field 
                control={formMethods.control}
                name="name"
                component={TextInput}
                placeholder="e.g. Custom habit" 
                label="Name"
                minWidth={300}
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
                inputStyle={{
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
      </KeyboardAvoidingView>
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