import React, { useState, useRef } from "react";
import { Text, View, StyleSheet, Button, Alert } from "react-native";
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
  const currentLow = useRef(1);
  const currentHigh = useRef(100);
  const nextGuestHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < userChoice) ||
      (direction === "greater" && currentGuess > userChoice)
    ) {
      Alert.alert("Don't lie!", "You know that tis is wrong", [
        { title: "Try again!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }
    const nextNumber = generateRandomNumber(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Smartphone Guess</Text>
      <NumberContainer>{currentGuess} </NumberContainer>
      <Card specificStyles={styles.buttonContainer}>
        <Button title="LOWER" onPress={() => nextGuestHandler("lower")} />
        <Button title="GREATER" onPress={() => nextGuestHandler("greater")} />
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
  title: {
    fontSize: 22,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 13,
    width: 300,
    padding: 20,
  },
});

export default GameScreen;
