import React from 'react';
import {StyleSheet,TouchableOpacity, Text, View} from 'react-native';

export default function Main({navigation}){
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.submit} onPress={() => navigation.navigate('RegistrationForm')}>
                <Text style={styles.text1}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.submit} onPress={() => navigation.navigate('List')}>
                <Text style={styles.text1}>ViewList</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.submit} onPress={() => navigation.navigate('Counter')}>
                <Text style={styles.text1}>Counter</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        // backgroundColor:'#eee',
        alignItems:'center',     
        paddingTop:40,   
    },
    submit:{
        padding:15,
        marginVertical:20,
        borderWidth:0.3,
        borderRadius:20,
        width:300,
        alignItems:'center',
        backgroundColor:'#2196F3',

    },
    text1:{
        marginHorizontal:10,
        fontSize:18,
        color:'white'
    }
})