import React, { useEffect, useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import { View } from "react-native";
import { HabitFrequency } from '../../../models/habitFrequency';
import { HabitTrigger } from '../../../models/habitTrigger';
import { Section } from '../../../screens/create-habit/HabitSetup';
import Field from "../../form/Field";
import HabitFrequencyComponent from "../habit-frequency";
import HabitTriggerComponent from "../habit-trigger-type-select";
import HabitTriggerSelect from '../HabitTriggerSelect';

const HabitTriggerSection = () => {
  const { control, setValue, watch } = useFormContext();
  const trigger = watch('trigger');
  
  useEffect(() => {
    setValue('frequency', {
      type: HabitFrequency.Daily,
      weekDays: [],
      monthDays: []
    });
    
    setValue('triggerSource', null);
  }, [trigger]);

  useEffect(() => {
    setValue('frequency.monthDays', []);
    setValue('frequency.weekDays', []);
  }, [watch('frequency.type')]);

  const subSection = useMemo(() => {
    const FrequencyField = () => (
      <Field
        control={control}
        name="frequency.type"
        label="Frequency"
        component={HabitFrequencyComponent}/>
     );
     
     const TriggerSourceField = () => (
        <Field
          control={control}
          name="triggerSource"
          label="Pick habit"
          component={HabitTriggerSelect}/>
      );
     
    return trigger == HabitTrigger.Reminder ? <FrequencyField/> : <TriggerSourceField />
  }, [trigger]);

  return (
    <View>
      <Section>
        <Field 
          control={control}
          name="trigger"
          label="Trigger"
          component={HabitTriggerComponent}/>
      </Section>
        <Section>
          {subSection}
        </Section>
    </View>
  );
};

export default HabitTriggerSection;