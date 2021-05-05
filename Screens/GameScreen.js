import React, { useState, useRef, useEffect } from "react";
import { View, StyleSheet, Button, Alert } from "react-native";
import NumberContainer from "../Components/NumberContainer";
import Card from "../Components/Card";
import TitleText from '../Components/TitleText'
import MButton from '../Components/MButton'
import { AntDesign } from '@expo/vector-icons';

const generateRandomNumber = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNumber = Math.floor(Math.random() * (max - min) + min);
  if (randomNumber === exclude) {
    return generateRandomNumber((min, max, exclude));
  } else {
    return randomNumber;
  }
};

const GameScreen = ({ userChoice, setWin }) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomNumber(1, 100, userChoice)
  );
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  useEffect(()=>{
    if(userChoice===currentGuess){
      setWin(true)
    }
  },[currentGuess,userChoice])


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
    )
    
    setCurrentGuess(nextNumber);
  };

  return (
    <View style={styles.screen}>
      <TitleText style={styles.title}>Smartphone Guess</TitleText>
      <NumberContainer>{currentGuess} </NumberContainer>
      <Card specificStyles={styles.buttonContainer}>
        <View>
          <MButton 
            variant='success600'
            onPress={() => nextGuestHandler("lower")}>
            <AntDesign name="down" size={24} color="white" />
          </MButton>  
        </View>
        <View>
          <MButton
            variant='primary'
            onPress={() => nextGuestHandler("greater")}
          >
            <AntDesign name="up" size={24} color="white" />
          </MButton>
        </View>
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
    width: 220,
    padding: 20,
  },
});

export default GameScreen;
