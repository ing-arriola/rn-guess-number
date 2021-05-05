import React from 'react'
import {View,StyleSheet, Button,Image} from 'react-native'
import TitleText from '../Components/TitleText'
const GameOverScreen = ({setUserNUmber,setWin}) => {
    const reset = () => {
        console.log('holas');
        setUserNUmber(undefined)
        setWin(false)
    }
    return (
        <View style={styles.screen} >
            <TitleText>Game over</TitleText>
            <View style={styles.imageContainer} >
                <Image 
                    source={require("../assets/success.png")} 
                    style={styles.image}
                    resizeMode='cover'
                    />
            </View>
            <Button onPress={reset} title="Play Again"/>
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    imageContainer:{
        width:300,
        height:300,
        borderRadius:300/2,
        borderWidth:1,
        borderColor:'#000',
        overflow:'hidden',
        marginVertical:30
    },
    image:{
        width:'100%',
        height:'100%',
    }
})
 
export default GameOverScreen
