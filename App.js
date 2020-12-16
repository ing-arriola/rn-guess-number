import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import Header from "./Components/Header";
import StartGame from "./Screens/StartGame";
import GameScreen from "./Screens/GameScreen";

export default function App() {
  const [userNUmber, setUserNUmber] = useState();

  const startGameHandler = (selectedNumber) => {
    console.log("holassss");
    setUserNUmber(selectedNumber);
  };
  console.log(userNUmber);
  let content = <StartGame startGameHandler={startGameHandler} />;

  if (userNUmber) {
    content = <GameScreen userChoice={userNUmber} />;
  }

  return (
    <View style={styles.container}>
      <Header title="Guess the number" />
      <StatusBar style="auto" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
