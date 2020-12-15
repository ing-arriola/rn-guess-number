import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Card from "../Components/Card";
import Input from "../Components/Input";
import Colors from "../Constants/Colors";

const StartGame = () => {
  const [value, setValue] = useState("");
  const userInputHandler = (enteredText) => {
    setValue(enteredText.replace(/[^0-9]/g, ""));
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.title}>Start new game!!</Text>

        <Card specificStyles={styles.card}>
          <Text>Enter a new number</Text>
          <Input
            keyboardType="number-pad"
            maxLength={2}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            specificStyles={styles.input}
            value={value}
            onChangeText={userInputHandler}
          />

          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title="Confirm" color={Colors.success} />
            </View>
            <View style={styles.button}>
              <Button color={Colors.alert} title="Reset" />
            </View>
          </View>
        </Card>
      </View>
    </TouchableWithoutFeedback>
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
  card: {
    width: 400,
    maxWidth: "80%",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  button: {
    width: 100,
  },
  input: {
    width: 100,
    padding: 5,
    textAlign: "center",
  },
});

export default StartGame;
