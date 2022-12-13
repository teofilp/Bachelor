import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ScrollView, StyleSheet, View } from "react-native"
import HabitsTilesList from '../../components/shared/habit-tiles/HabitsTilesList';
import ItemTile from '../../components/shared/habit-tiles/ItemTile';
import Section from '../../components/shared/habit-tiles/Section';
import { Column, ListContainer } from '../../components/shared/habit-tiles/SimpleTilesList';
import Colors from '../../constants/color';
import Route from '../../constants/route';
import { PREDEFINED_HABITS } from '../../data/predefined-habits';
import { IconType } from '../../models/iconType';

const PickHabitScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.root}>
      <ScrollView>
        <HabitsTilesList
          onItemPress={item => navigation.navigate(Route.HabitSetup as never, item as never)}
          items={PREDEFINED_HABITS}
          groupBy='category'
          useGrouping />
        <Section style={styles.section} title="Custom">
          <ListContainer>
            <Column>
              <ItemTile
                textColor='white'
                title='Create habit'
                icon={{
                  name: 'ios-add-outline',
                  type: IconType.Ionicons
                }}
                backgroundColor={Colors.MaximumPurple} />
            </Column>
            <Column />
          </ListContainer>
        </Section>
      </ScrollView>
    </View>
  );
};

export default PickHabitScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  section: {
    padding: 8
  }
})