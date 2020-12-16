import React, { useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import NumberContainer from "../Components/NumberContainer";
import Card from "../Components/Card";

const generateRandomNumber = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  if (randomNumber === exclude) {
    return generateRandomNumber((min, max, exclude));
  } else {
    return randomNumber;
  }
};

const GameScreen = ({ userChoice }) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomNumber(1, 100, userChoice)
  );
  return (
    <View style={styles.screen}>
      <Text>Smartphone Guess</Text>
      <NumberContainer>{currentGuess} </NumberContainer>
      <Card style={styles.buttonContainer}>
        <Button title="LOWER" />
        <Button title="GREATER" />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 300,
    maxWidth: "80%",
  },
});

export default GameScreen;
