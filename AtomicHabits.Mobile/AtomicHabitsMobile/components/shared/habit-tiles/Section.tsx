import React, { PropsWithChildren } from "react";
import { StyleSheet, View } from "react-native";
import Text from "../../Text";

interface SectionProps {
  title?: string;
  style?: any;
}

const Section = ({ title = '', children , style}: PropsWithChildren<SectionProps>) => (
  <View style={[styles.sectionContainer, style]} key={title}>
    {title ? <Text style={styles.sectionTitle}>{title}</Text> : null}
    {children}
  </View>
);

export default Section;

const styles = StyleSheet.create({
  sectionContainer: {
    marginBottom: 32
  },
  sectionTitle: {
    fontSize: 24,
    marginBottom: 4,
    paddingLeft: 8
  }
});