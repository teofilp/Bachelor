import React from 'react';
import { StyleSheet, View } from 'react-native';
import { HabitInfo } from '../../../models/habitInfo';
import ItemTile from './ItemTile';

interface SimpleTilesListProps {
  columns: HabitInfo[][];
  useGrouping?: boolean;
}

const renderHabitItems = (items: HabitInfo[], showCategoryLabel: boolean) => 
  items.map((item: HabitInfo, index: number) => 
    <ItemTile 
      key={index} 
      backgroundColor={item.color}
      title={item.name}
      topLabel={item.category}
      icon={item.icon}
      showTopLabel={showCategoryLabel}
    />
  );

const SimpleTilesList = (({ columns, useGrouping } : SimpleTilesListProps) => (
  <View style={styles.listContainer}>
    <View style={styles.column}>{renderHabitItems(columns[0], !useGrouping)}</View>
    <View style={styles.column}>{renderHabitItems(columns[1], !useGrouping)}</View>
  </View>
));

export default SimpleTilesList;

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  column: {
    paddingVertical: 8,
    paddingHorizontal: 8,
    flex: 1,
  },
});