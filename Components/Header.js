import React from "react";
import { StyleSheet, Text, View } from "react-native";
const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
    paddingTop: 20,
    width: "100%",
    height: 70,
  },
  headerTitle: {
    fontSize: 22,
    color: "#fff",
  },
});

export default Header;
