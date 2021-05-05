import React from "react";
import { StyleSheet, View } from "react-native";
import TitleText from '../Components/TitleText'
const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <TitleText style={styles.headerTitle}>{title}</TitleText>
      <TitleText style={styles.headerTitle}>By Jaime Arriola</TitleText>
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
