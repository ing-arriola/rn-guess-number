import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'
import Colors from '../Constants/Colors'

const MButton = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} >
            <View style={styles[props.variant]} >
                <Text style={styles.textButton} >
                    {props.children}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    textButton:{
        color:'white',
        fontFamily:'open-sans',
        fontSize:15,
        textAlign:'center'
    },
    primary:{
        backgroundColor:Colors.primary,
        paddingHorizontal:20,
        paddingVertical:12,
        borderRadius:5  
    },
    alert:{
        backgroundColor:Colors.alert,
        paddingHorizontal:20,
        paddingVertical:12,
        borderRadius:5  
    }
})

export default MButton
