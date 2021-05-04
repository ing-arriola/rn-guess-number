import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import Header from "./Components/Header";
import StartGame from "./Screens/StartGame";
import GameScreen from "./Screens/GameScreen";
import GameOverScreen from './Screens/GameOverScreen'

export default function App() {
  const [userNUmber, setUserNUmber] = useState();
  const [win,setWin] = useState(false)

  const startGameHandler = (selectedNumber) => {
    setUserNUmber(selectedNumber);
  };
  let content = <StartGame startGameHandler={startGameHandler} />;

  if (userNUmber) {
    content = <GameScreen userChoice={userNUmber} setWin={setWin}  />;
  }

  return (
    <View style={styles.container}>
      <Header title="Guess the number" />
      <StatusBar style="auto" />
      {win ? <GameOverScreen setUserNUmber={setUserNUmber} setWin={setWin} />  : content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
