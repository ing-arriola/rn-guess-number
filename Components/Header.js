import React from "react";
import { StyleSheet, Text, View } from "react-native";
const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
      <Text style={styles.headerTitle}>By Jaime Arriola</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
    paddingTop: 30,
    paddingBottom: 10,
    width: "100%",
    height: 75,
  },
  headerTitle: {
    fontSize: 22,
    color: "#fff",
  },
});

export default Header;
