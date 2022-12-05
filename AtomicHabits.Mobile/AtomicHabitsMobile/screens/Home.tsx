import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Colors from '../constants/color';
import Route from '../constants/route';
import DailyHabitsScreen from './DailyHabits';
import StatisticsScreen from './Statistics';
import CommunityScreen from './Community';
import ProfileScreen from './Profile';
import { Ionicons } from '@expo/vector-icons';

const Tabs = createBottomTabNavigator();

const Home = () => (
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
      headerTintColor: Colors.DarkCornflowerBlue,
      tabBarShowLabel: false,
      tabBarActiveTintColor: Colors.DarkCornflowerBlue,
      tabBarInactiveTintColor: Colors.CornflowerBlueFaded,
    }}
  >
    <Tabs.Screen 
      name={Route.DailyHabits} 
      component={DailyHabitsScreen}
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
)

export default Home;