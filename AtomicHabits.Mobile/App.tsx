import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DailyHabits from './screens/DailyHabits';
import Route from './constants/route';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Colors from './constants/color';
import StatisticsScreen from './screens/Statistics';
import ProfileScreen from './screens/Profile';
import CommunityScreen from './screens/Community';

const Tabs = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <NavigationContainer>
          <Tabs.Navigator 
            sceneContainerStyle={{
              backgroundColor: Colors.MintCream
            }}
            screenOptions={{
              tabBarStyle: {
                backgroundColor: Colors.MintCream,
                borderTopColor: 'transparent'
              },
              headerLeftContainerStyle: {
                flex: 1,
                paddingLeft: 26
              },
              headerRightContainerStyle: {
                alignItems: 'flex-end',
                flex: 1,
                paddingRight: 26
              },
              headerStyle: {
                backgroundColor: Colors.MintCream,
                shadowOpacity: 0
              },
              tabBarShowLabel: false,
              tabBarActiveTintColor: Colors.DarkCornflowerBlue,
              tabBarInactiveTintColor: Colors.CornflowerBlueFaded,
            }}
          >
            <Tabs.Screen 
              name={Route.MyHabits} 
              component={DailyHabits}
              options={{
                title: 'Daily Habits',
                tabBarIcon: ({ color }) => (
                  <Ionicons name='ios-list' color={color} size={24} />
                )
              }}
              />
            <Tabs.Screen 
              name={Route.Statistics} 
              component={StatisticsScreen}
              options={{
                title: 'Statistics',
                tabBarIcon: ({ color }) => (
                  <Ionicons name='ios-calendar' color={color} size={24} />
                )
              }}
              />
            <Tabs.Screen 
              name={Route.Community} 
              component={CommunityScreen}
              options={{
                title: 'Comunity',
                tabBarIcon: ({ color }) => (
                  <Ionicons name='ios-earth' color={color} size={24} />
                )
              }}
              />
            <Tabs.Screen 
              name={Route.Profile} 
              component={ProfileScreen}
              options={{
                title: 'Profile',
                tabBarIcon: ({ color }) => (
                  <Ionicons name='ios-person' color={color} size={24} />
                )
              }}
              />
          </Tabs.Navigator>
        </NavigationContainer>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.MintCream
  },
});
