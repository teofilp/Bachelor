import React from 'react';
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import Text from "../../Text";

interface ItemTileProps {
  title: string;
  backgroundColor?: string;
  icon?: string;
  topLabel?: string;
  showTopLabel?: boolean;
}

const ItemTile = ({ title, backgroundColor, icon, topLabel, showTopLabel }: ItemTileProps) => {
  return (
  <TouchableOpacity>
    <View style={[{ backgroundColor: backgroundColor }, styles.itemContainer]}>
      <View style={[styles.topContainer, showTopLabel && { justifyContent: 'space-between' }]}>
        {showTopLabel && <Text>{topLabel}</Text>}
        <Ionicons name={icon as any ?? 'ios-help-outline'} size={24}/>
      </View>
      <View style={styles.titleContainer}>
        <Text numberOfLines={2} style={styles.titleText}>{title}</Text>
      </View>
    </View>
  </TouchableOpacity>
  )
}

export default ItemTile;

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
  titleContainer: {
    flexDirection: 'row',
    marginTop: 64
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});