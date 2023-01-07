import React, { useContext, PropsWithChildren, useMemo } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native"
import Text from "../Text";
import { ColorThemeContext } from "../../context/colorThemeContext";

interface TileSelectProps {
  value: any;
  label: string;
  onValueChanged: (value: any) => void;
  items: {
    label: string;
    value: any;
  }[];
  fillEmptyItemsCount?: number;
}

const TileSelect = ({ value, label, onValueChanged, children, items, fillEmptyItemsCount = 0 } : PropsWithChildren<TileSelectProps>) => {
  const { color } = useContext(ColorThemeContext);
  
  const getfontWeightStyle = (item: any) => {
    if (item == value) return 'bold';
  }
  const getContainerStyle = (item: any) => item == value && { backgroundColor: color };

  const getTextStyle = (item: any) => item == value && styles.activeText;

  const isInnerItem = (index: number) => index > 0 && index < items.length + fillEmptyItemsCount - 1;

  const padding = useMemo(() => {
    return Array.from(new Array(fillEmptyItemsCount).keys())
      .map(x => <View key={x} style={{ flex: 1, opacity: 0 }}/>)
  }, [fillEmptyItemsCount]);

  return (
    <View style={styles.root}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.optionsList}>
        {items.map((item, index) => (
          <TouchableOpacity 
            key={item.value}
            style={[styles.optionContainer, getContainerStyle(item.value), isInnerItem(index) && {
              marginHorizontal: 16
            }]} 
            onPress={() => onValueChanged(item.value)}>
            <Text 
              fontWeightStyle={getfontWeightStyle(item.value)}
              style={getTextStyle(item.value)}>
                {item.label}
            </Text>
          </TouchableOpacity>
        ))}
        {padding}
      </View>
      <View style={{ marginTop: 12 }}>
        {children}
      </View>
    </View>
  )
}

export default TileSelect;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  optionsList: {
    flexDirection: 'row'
  },
  optionContainer: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 4,
    backgroundColor: '#eee',
    marginTop: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  activeText: {
    color: 'white',
  },
  label: {
    fontSize: 16
  }
});