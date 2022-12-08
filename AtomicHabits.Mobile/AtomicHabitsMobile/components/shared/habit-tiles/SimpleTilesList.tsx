import React from 'react';
import { StyleSheet, View } from 'react-native';
import { HabitInfo } from '../../../models/habitInfo';
import ItemTile from './ItemTile';

interface SimpleTilesListProps {
  columns: HabitInfo[][];
  useGrouping?: boolean;
  onItemPress?: (item: HabitInfo) => void;
}

export const ListContainer = ({ children }: any) => {
  return <View style={styles.listContainer}>
    {children}
  </View>
}

export const Column = ({ children }: any) => {
  return <View style={styles.column}>
    {children}
  </View>
}

const renderHabitItems = (items: HabitInfo[], showCategoryLabel: boolean, onPress?: (item: HabitInfo) => void) => 
  items.map((item: HabitInfo, index: number) => 
    <ItemTile 
      key={index} 
      backgroundColor={item.color}
      title={item.name}
      topLabel={item.category}
      icon={item.icon}
      showTopLabel={showCategoryLabel}
      onPress={() => onPress?.(item)}
    />
  );

const SimpleTilesList = (({ columns, useGrouping, onItemPress } : SimpleTilesListProps) => (
  <ListContainer>
    <Column>{renderHabitItems(columns[0], !useGrouping, onItemPress)}</Column>
    <Column>{renderHabitItems(columns[1], !useGrouping, onItemPress)}</Column>
  </ListContainer>
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