import React from 'react';
import { useMemo } from "react";
import { StyleSheet, View } from "react-native"
import { HabitInfo } from "../../../models/habitInfo";
import groupby from 'lodash.groupby';
import SimpleTilesList from './SimpleTilesList';
import { HabitSection } from '../../../models/habit-tiles/habitSection';
import GroupedTilesList from './GroupedTilesList';
import { getColumns } from '../../../utils/habit-tiles';

interface HabitsTilesListProps {
  items: HabitInfo[];
  useGrouping?: boolean;
  groupBy?: string;
}

const HabitsTilesList = ({ items, useGrouping = false, groupBy }: HabitsTilesListProps) => {  
  const simpleColumns = useMemo<HabitInfo[][]>(() => {
    if (useGrouping) return [[], []];

    return getColumns(items);
  }, [items, useGrouping]);

  return (
    <View style={styles.root}>
      {useGrouping ? (
        <GroupedTilesList items={items} groupBy={groupBy!} />
      ) : (
        <SimpleTilesList columns={simpleColumns} />
      )}
    </View>
  );
}

export default HabitsTilesList;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 8
  }
});