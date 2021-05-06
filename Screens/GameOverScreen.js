import React from 'react'
import {View,StyleSheet, Button,Image, Dimensions,ScrollView} from 'react-native'
import TitleText from '../Components/TitleText'
const GameOverScreen = ({setUserNUmber,setWin}) => {
    const reset = () => {
        console.log('holas');
        setUserNUmber(undefined)
        setWin(false)
    }
    return (
        <ScrollView>
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
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    imageContainer:{
        width:Dimensions.get('window').width * 0.7,
        height:Dimensions.get('window').width  * 0.7,
        borderRadius:Dimensions.get('window').width  * 0.7 /2,
        borderWidth:1,
        borderColor:'#000',
        overflow:'hidden',
        marginVertical:Dimensions.get('window').height / 20
    },
    image:{
        width:'100%',
        height:'100%',
    }
})
 
export default GameOverScreen
