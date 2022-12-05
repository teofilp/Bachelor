import React from 'react';
import { ScrollView, StyleSheet, View } from "react-native"
import HabitsTilesList from '../components/shared/habit-tiles/HabitsTilesList';
import Text from "../components/Text"
import { PREDEFINED_HABITS } from '../data/predefined-habits';

const CreateHabitScreen = () => {
  return (
    <View style={styles.root}>
     <ScrollView style={{ flex: 1 }}>
      <HabitsTilesList items={PREDEFINED_HABITS} useGrouping groupBy='category' />
     </ScrollView>
    </View>
  );
};

export default CreateHabitScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1
  }
})