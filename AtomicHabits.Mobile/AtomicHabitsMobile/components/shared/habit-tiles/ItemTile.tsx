import React from 'react';
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Text from "../../Text";
import { Icon } from '../../../models/icon';
import CustomIcon from '../../Icon';

interface ItemTileProps {
  title: string;
  backgroundColor?: string;
  textColor?: string;
  icon?: Icon;
  topLabel?: string;
  showTopLabel?: boolean;
  onPress?: () => void;
}

const ItemTile = ({ title, backgroundColor, icon, topLabel, showTopLabel, textColor = "white", onPress }: ItemTileProps) => {
  
  return (
  <TouchableOpacity onPress={onPress}>
    <View style={[{ backgroundColor: backgroundColor }, styles.itemContainer]}>
      <View style={[styles.topContainer, showTopLabel && { justifyContent: 'space-between' }]}>
        {showTopLabel && <Text style={{ color: textColor }}>{topLabel}</Text>}
        <CustomIcon icon={icon} size={24} color={textColor} />
      </View>
      <View style={styles.titleContainer}>
        <Text numberOfLines={2} style={[styles.titleText, { color: textColor }]}>{title}</Text>
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
    fontWeight: 'bold',
  }
});