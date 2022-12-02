import { useMemo, useCallback } from "react";
import { StyleSheet, View } from "react-native"
import { HabitListItem } from "../../models/habitListItem";
import HabitItemTile from "./HabitItemTIle";
import groupby from 'lodash.groupby';
import Text from "../Text";
import { getColorForCategory } from "../../mappers/category";

interface HabitsTilesListProps {
  items: HabitListItem[];
  useGrouping?: boolean;
  groupBy?: string;
}

interface HabitSection {
  title: string;
  items: HabitListItem[][];
}

const renderHabitItems = (items: HabitListItem[], showCategoryLabel: boolean) => 
  items.map((item: HabitListItem, index: number) => 
    <HabitItemTile 
      key={index} 
      {...item}
      showCategoryLabel={showCategoryLabel}
    />
  );

const HabitsTilesList = ({ items, useGrouping = false, groupBy }: HabitsTilesListProps) => {  
  const getColumns = (items: HabitListItem[]) => items.reduce<HabitListItem[][]>((list, current, index) => {
    var pushIndex = index % 2 == 0 ? 0 : 1;
    list[pushIndex].push(current);
    return list;
  }, [[], []]);

  const simpleColumns = useMemo<HabitListItem[][]>(() => {
    if (useGrouping) return [[], []];

    return getColumns(items);
  }, [items, useGrouping]);

  const sections = useMemo<HabitSection[]>(() => {
    if (!useGrouping) return [];
    var groupedItems = groupby(items, groupBy!);
    return Object.keys(groupedItems).map<HabitSection>(key => ({
      title: key,
      items: getColumns(groupedItems[key])
    }));
  }, [items, useGrouping])

  const SimpleTilesList = useCallback(({ columns } : { columns: HabitListItem[][] }) => (
    <View style={styles.listContainer}>
      <View style={styles.column}>{renderHabitItems(columns[0], !useGrouping)}</View>
      <View style={styles.column}>{renderHabitItems(columns[1], !useGrouping)}</View>
    </View>
  ), [simpleColumns]);

  const GroupedTilesList = useCallback(() => (
    <>
      {sections.map(sec => (
        <View style={styles.sectionContainer} key={sec.title}>
          <Text style={styles.sectionTitle}>{sec.title}</Text>
          <SimpleTilesList columns={sec.items} />
        </View>
      ))}
    </>
  ), [sections]);

  return (
    <View style={styles.root}>
      {useGrouping ? (
        <GroupedTilesList />
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
    padding: 8,
  },
  listContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  column: {
    paddingVertical: 8,
    paddingHorizontal: 8,
    flex: 1,
  },
  sectionContainer: {
    marginBottom: 32
  },
  sectionTitle: {
    fontSize: 24,
    marginBottom: 4,
    paddingLeft: 8
  }
});