import React from 'react'
import {View,Text,StyleSheet, Button} from 'react-native'
const GameOverScreen = ({setUserNUmber,setWin}) => {
    const reset = () => {
        console.log('holas');
        setUserNUmber(undefined)
        setWin(false)
    }
    return (
        <View style={styles.screen} >
            <Text>Game over</Text>
            <Button onPress={reset} title="Play Again"/>
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
 
export default GameOverScreen
