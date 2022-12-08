import React, { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { HabitSection } from '../../../models/habit-tiles/habitSection';
import { HabitInfo } from '../../../models/habitInfo';
import Text from '../../Text';
import SimpleTilesList from './SimpleTilesList';
import groupby from 'lodash.groupby';
import { getColumns } from '../../../utils/habit-tiles';
import Section from './Section';

interface GroupedTilesListProps {
  items: HabitInfo[];
  groupBy: string;
  onItemPress?: (item: HabitInfo) => void;
}

const GroupedTilesList = ({ items, groupBy, onItemPress }: GroupedTilesListProps) => {
  const sections = useMemo<HabitSection[]>(() => {
    var groupedItems = groupby(items, groupBy);
    return Object.keys(groupedItems).map<HabitSection>(key => ({
      title: key,
      items: getColumns(groupedItems[key])
    }));
  }, [items]);

  return (
    <>
      {sections.map(sec => (
        <Section key={sec.title} title={sec.title}>
          <SimpleTilesList onItemPress={onItemPress} key={sec.title} useGrouping columns={sec.items} />
        </Section>
      ))}
    </>
  );
};

export default GroupedTilesList;