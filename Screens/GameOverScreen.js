import React from 'react'
import {View,StyleSheet, Button} from 'react-native'
import BodyText from '../Components/BodyText'
const GameOverScreen = ({setUserNUmber,setWin}) => {
    const reset = () => {
        console.log('holas');
        setUserNUmber(undefined)
        setWin(false)
    }
    return (
        <View style={styles.screen} >
            <BodyText>Game over</BodyText>
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
