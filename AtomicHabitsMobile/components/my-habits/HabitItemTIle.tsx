import React from 'react';
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { HabitListItem } from "../../models/habitListItem";
import { Ionicons } from '@expo/vector-icons';
import Text from "../Text";

interface HabitItemTileProps extends HabitListItem {
  showCategoryLabel: boolean;
}

const HabitItemTile = ({ name, color, icon, category, showCategoryLabel }: HabitItemTileProps) => {
  return (
  <TouchableOpacity>
    <View style={[{ backgroundColor: color }, styles.itemContainer]}>
      <View style={[styles.topContainer, showCategoryLabel && { justifyContent: 'space-between' }]}>
        {showCategoryLabel && <Text>{category}</Text>}
        <Ionicons name={icon as any ?? 'ios-help-outline'} size={24} />
      </View>
      <View style={styles.nameContainer}>
        <Text numberOfLines={2} style={styles.nameText}>{name}</Text>
      </View>
    </View>
  </TouchableOpacity>
  )
}

export default HabitItemTile;

const styles = StyleSheet.create({
  itemContainer: {
    padding: 12,
    borderRadius: 12,
    minHeight: 120,
    marginBottom: 16,
    flex: 1,
    justifyContent: 'space-between',
    shadowColor: '#ddd',
    shadowOpacity: .75,
    shadowRadius: 5,
    shadowOffset: { width: 5, height: 5}
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  nameContainer: {
    flexDirection: 'row',
    marginTop: 64
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});