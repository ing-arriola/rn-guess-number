import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import * as Font from 'expo-font'
import { StyleSheet, View } from "react-native";
import AppLoading from 'expo-app-loading'

import Header from "./Components/Header";
import StartGame from "./Screens/StartGame";
import GameScreen from "./Screens/GameScreen";
import GameOverScreen from './Screens/GameOverScreen'

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans':require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold':require('./assets/fonts/OpenSans-Bold.ttf')
  })
}

export default function App() {
  const [userNUmber, setUserNUmber] = useState();
  const [win,setWin] = useState(false)
  const [loaded,setLoaded] = useState(false)

  if(!loaded){
    return <AppLoading 
              startAsync={fetchFonts} 
              onFinish={()=>setLoaded(true)} 
              onError={(err) => console.log(err)}/>
  }

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
