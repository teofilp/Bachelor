import { useLayoutEffect, useState } from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native"
import { HabitListItem } from "../models/habitListItem";
import { getColorForCategory } from "../mappers/category";
import WeekBar from "../components/my-habits/WeekBar";
import HabitsTilesList from "../components/my-habits/HabitsTilesList";
import { useNavigation } from "@react-navigation/native";
import Colors from "../constants/color";
import { Ionicons } from '@expo/vector-icons';
import Text from "../components/Text";

const MyHabitsScreen = () => {
  const [activeDay, setActiveDay] = useState(new Date().getDay());
  const navigation = useNavigation();
  const [useGrouping, setUseGrouping] = useState(false);
  const [items] = useState<HabitListItem[]>([
    {
      name: 'Read at least 10 pages per day',
      color: getColorForCategory('Lifestyle'),
      category: 'Lifestyle'
    },
    {
      name: 'Walk 10 minutes every day',
      color: getColorForCategory('Lifestyle'),
      category: 'Lifestyle'
    },
    {
      name: 'Meditate 3 times a day',
      color: getColorForCategory('Mindfulness'),
      category: 'Mindfulness'
    },
    {
      name: 'Work more',
      color: getColorForCategory('Health'),
      category: 'Health'
    },
    {
      name: 'Read at least 10 pages per day',
      color: getColorForCategory('Lifestyle'),
      category: 'Lifestyle'
    },
    {
      name: 'Walk 10 minutes every day',
      color: getColorForCategory('Lifestyle'),
      category: 'Lifestyle'
    },
    {
      name: 'Meditate 3 times a day',
      color: getColorForCategory('Mindfulness'),
      category: 'Mindfulness'
    },
    {
      name: 'Work more',
      color: getColorForCategory('Health'),
      category: 'Health'
    },
  ]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => setUseGrouping(old => !old)}>
          <Ionicons 
            name={useGrouping ? 'file-tray-stacked-outline' : 'file-tray-outline'} 
            color={Colors.DarkCornflowerBlue} size={28} 
          />
        </TouchableOpacity>
      )
    })
  }, [useGrouping]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => {}}>
          <Ionicons name='add-outline' color={Colors.DarkCornflowerBlue} size={28} />
        </TouchableOpacity>
      )
    })
  }, []);

  const NoItems = () => (
    <View style={styles.noItemContainer}>
      <Text style={styles.noItemTitle}>You have no activities scheduled for this day</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>create habit</Text>
        <Ionicons name='add-circle-outline' size={26} color='white' />
      </TouchableOpacity>
    </View>
  )

  const show = false;
  const content = items.length > 0 && show ? (
    <ScrollView style={{ flex: 1 }}>
      <HabitsTilesList items={items} useGrouping={useGrouping} groupBy="category"/>
    </ScrollView> 
    ) : (
      <NoItems />
    )

  return (
    <View style={styles.root}>
      <WeekBar style={styles.weekBar} activeDay={activeDay} onDayChange={setActiveDay} />
        {content}
    </View>
  )
}

export default MyHabitsScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  weekBar: {
    marginTop: 12
  },
  noItemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 50,
    backgroundColor: Colors.DarkCornflowerBlue,
    marginTop: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    marginRight: 12,
    textTransform: "capitalize"
  },
  noItemTitle: {
    fontSize: 18,
    textAlign: 'center'
  }
});