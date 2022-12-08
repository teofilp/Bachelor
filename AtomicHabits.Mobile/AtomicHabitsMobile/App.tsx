import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Route from './constants/route';
import { NavigationContainer } from '@react-navigation/native';
import Colors from './constants/color';
import HomeScreen from './screens/Home';
import { CreateHabitScreen } from './screens/create-habit';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <NavigationContainer>
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
                headerShown: false
              }} 
              name={Route.Home} component={HomeScreen} />
            <Stack.Screen options={{
              presentation: 'modal',
              headerShown: false
            }} name={Route.CreateHabit} component={CreateHabitScreen}/>
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.MintCream
  },
});