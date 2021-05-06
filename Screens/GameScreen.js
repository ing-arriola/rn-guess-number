import React, { useState, useRef, useEffect } from "react";
import { View, StyleSheet, Alert, ScrollView } from "react-native";
import NumberContainer from "../Components/NumberContainer";
import Card from "../Components/Card";
import TitleText from '../Components/TitleText'
import BodyText from '../Components/BodyText'
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

const itemToRender = (value,round)=> (
  <View key={value} style={styles.listItem} >
    <BodyText>
      # {round}
    </BodyText>
     <BodyText style={styles.item} >
          {value}
      </BodyText>
  </View>
)

const GameScreen = ({ userChoice, setWin }) => {
  const initialGuess = generateRandomNumber(1, 100, userChoice)
  const [currentGuess, setCurrentGuess] = useState(initialGuess)
  const [prevGuesses,setPrevGuesses] = useState([initialGuess])
  const currentLow = useRef(1)
  const currentHigh = useRef(100)

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
      currentLow.current = currentGuess +1;
    }
    const nextNumber = generateRandomNumber(
      currentLow.current,
      currentHigh.current,
      currentGuess
    )
    setCurrentGuess(nextNumber);
    setPrevGuesses(currentVal => [nextNumber,...currentVal])
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
      <View style={styles.list} >
        <ScrollView>
          {prevGuesses.map((guess,index) => itemToRender(guess, prevGuesses.length - index))}
        </ScrollView>
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
    fontSize: 22,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 13,
    width: 220,
    padding: 20,
  },
  list:{
    flex:1,
    marginTop:10,
    width:'45%'
  },
  listItem:{
    borderColor:"#ccc",
    borderWidth:1,
    padding:15,
    marginVertical:10,
    backgroundColor:'white',
    flexDirection:"row",
    justifyContent:'space-around',
    borderRadius:10
  }
});

export default GameScreen;
