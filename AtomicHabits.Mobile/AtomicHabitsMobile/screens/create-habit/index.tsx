import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Colors from "../../constants/color"
import Route from "../../constants/route";
import HabitSetupScreen from "./HabitSetup";
import PickHabitScreen from "./PickHabit";

const Stack = createNativeStackNavigator();

export const CreateHabitScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: {
          backgroundColor: Colors.MintCream,
        },
        headerStyle: {
          backgroundColor: Colors.MintCream,
        },
        headerTintColor: Colors.MaximumPurple,
        headerShadowVisible: false,
      }}>
        <Stack.Screen
          options={{
            title: 'Choose habit'
          }}
          name={Route.PickHabit} 
          component={PickHabitScreen} />
        <Stack.Screen
          options={{
            title: 'Create habit',
          }}
          name={Route.HabitSetup}
          component={HabitSetupScreen} />
    </Stack.Navigator>
  )
}