import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
const StartGame = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start new game!!</Text>
      <View style={styles.inputContainer}>
        <Text>Enter a new number</Text>
        <TextInput />

        <View style={styles.buttonContainer}>
          <Button title="Confirm" />
          <Button title="Reset" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    alignItems: "center",
    width: 300,
    maxWidth: "80%",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
});

export default StartGame;
