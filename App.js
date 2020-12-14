import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import Header from "./Components/Header";
import StartGame from "./Screens/StartGame";

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="Guess the number" />
      <StatusBar style="auto" />
      <StartGame />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
