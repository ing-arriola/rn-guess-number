import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Dimensions
} from "react-native";
import Card from "../Components/Card";
import Input from "../Components/Input";
import NumberContainer from "../Components/NumberContainer";
import Colors from "../Constants/Colors";
import BodyText from '../Components/BodyText'
import TitleText from '../Components/TitleText'
import MButton from '../Components/MButton'

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
    if (isNaN(chosenNumber) || chosenNumber < 0 || chosenNumber > 99 ) {
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
        <BodyText>You selected:</BodyText>
        <NumberContainer>{selectedValue}</NumberContainer>
        <MButton
          variant='primary'
          onPress={() => startGameHandler(selectedValue)}
        >
          Start Game
        </MButton>
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
      <TitleText style={styles.title}>Start new game!!</TitleText>

        <Card specificStyles={styles.card}>
          <BodyText style={styles.subtitle}>Enter a new number</BodyText>
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
              <MButton
                variant='primary'
                onPress={confirmInputHandler}
              >
                OK
              </MButton>
            </View>
            <View style={styles.button}>
              <MButton
                variant='alert'
                onPress={resetInputHandler}
              >
                Reset
              </MButton>
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
    maxWidth:'95%',
    minWidth: Dimensions.get('window').height > 600  ? 300 : 200,
    width:'80%',
    alignItems: "center",
    padding: 18,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginTop: 15,
  },
  button: {
    //width: 100,
    width:Dimensions.get('window').width / 4
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
