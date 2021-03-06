import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity, Dimensions} from 'react-native'
import Colors from '../Constants/Colors'

const MButton = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} >
            <View style={{...styles.button,...styles[props.variant]}} >
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
    button:{
        paddingHorizontal: Dimensions.get('window').height > 600  ? 20 : 12,
        paddingVertical:Dimensions.get('window').height > 600  ? 12 : 5,
        borderRadius:5  
    },
    primary:{
        backgroundColor:Colors.primary,
    },
    alert:{
        backgroundColor:Colors.alert,
    },
    success600:{
        backgroundColor:Colors.success600,
    },
})

export default MButton
