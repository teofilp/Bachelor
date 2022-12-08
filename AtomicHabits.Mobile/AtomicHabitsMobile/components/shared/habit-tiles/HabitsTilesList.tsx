import React from 'react';
import { useMemo } from "react";
import { StyleSheet, View } from "react-native"
import { HabitInfo } from "../../../models/habitInfo";
import SimpleTilesList from './SimpleTilesList';
import GroupedTilesList from './GroupedTilesList';
import { getColumns } from '../../../utils/habit-tiles';

interface HabitsTilesListProps {
  items: HabitInfo[];
  useGrouping?: boolean;
  groupBy?: string;
  onItemPress?: (item: HabitInfo) => void;
}

const HabitsTilesList = ({ items, useGrouping = false, groupBy, onItemPress }: HabitsTilesListProps) => {  
  const simpleColumns = useMemo<HabitInfo[][]>(() => {
    if (useGrouping) return [[], []];

    return getColumns(items);
  }, [items, useGrouping]);

  return (
    <View style={styles.root}>
      {useGrouping ? (
        <GroupedTilesList onItemPress={onItemPress} items={items} groupBy={groupBy!} />
      ) : (
        <SimpleTilesList onItemPress={onItemPress} columns={simpleColumns} />
      )}
    </View>
  );
}

export default HabitsTilesList;

const styles = StyleSheet.create({
  root: {
    padding: 8
  }
});