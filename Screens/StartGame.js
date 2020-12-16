import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import Card from "../Components/Card";
import Input from "../Components/Input";
import NumberContainer from "../Components/NumberContainer";
import Colors from "../Constants/Colors";

const StartGame = ({ startGameHandler }) => {
  const [value, setValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedValue, setSelectedValue] = useState();
  const userInputHandler = (enteredText) => {
    setValue(enteredText.replace(/[^0-9]/g, ""));
  };
  const resetInputHandler = () => {
    setValue("");
    setConfirmed(false);
  };
  const confirmInputHandler = () => {
    const chosenNumber = parseInt(value);
    if (isNaN(chosenNumber) || chosenNumber < 0) {
      Alert.alert("Error", "Number entered must be between 0-99", [
        { title: "OK", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }
    setConfirmed(true);
    setSelectedValue(chosenNumber);
    setValue("");
    Keyboard.dismiss();
  };
  let confirmation;
  if (confirmed) {
    confirmation = (
      <Card specificStyles={styles.selectedContainer}>
        <Text>You selected:</Text>
        <NumberContainer>{selectedValue}</NumberContainer>
        <Button
          title="Start Game"
          onPress={() => startGameHandler(selectedValue)}
        />
      </Card>
    );
  }
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.title}>Start new game!!</Text>

        <Card specificStyles={styles.card}>
          <Text style={styles.subtitle}>Enter a new number</Text>
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
              <Button
                title="Confirm"
                color={Colors.success}
                onPress={confirmInputHandler}
              />
            </View>
            <View style={styles.button}>
              <Button
                color={Colors.alert}
                title="Reset"
                onPress={resetInputHandler}
              />
            </View>
          </View>
        </Card>
        {confirmation}
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
    fontSize: 22,
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 18,
  },
  card: {
    width: 400,
    maxWidth: "80%",
    alignItems: "center",
    padding: 25,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginTop: 15,
  },
  button: {
    width: 100,
  },
  input: {
    width: 100,
    padding: 10,
    textAlign: "center",
  },
  selectedContainer: {
    marginTop: 20,
    paddingHorizontal: 50,
    alignItems: "center",
  },
});

export default StartGame;
