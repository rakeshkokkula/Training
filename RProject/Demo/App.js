import React from 'react';
import {StyleSheet,TextInput, View, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Button} from 'react-native';
import { MaterialCommunityIcons, FontAwesome, AntDesign } from '@expo/vector-icons';

export default function Apps() {
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.container}>
                <Text style={styles.signin}>Sign In</Text>
                <Text style={styles.join}>Join the World's biggest UX design community!</Text>
                <View style={styles.input}>
                <AntDesign name='user' size={28} color='black' />
                <TextInput
                style={styles.inp}
                placeholder='E-mail or Phone Number'
                 />
                 </View>
                 <View style={styles.input}>
                 <AntDesign name='lock' size={28} color='black' />
                 <TextInput     
                 style={styles.inp}           
                placeholder='Password'
                 />
                 </View>
                 
                 <TouchableOpacity style={styles.sbtn}>
                     <Text style={styles.text}>Sign In</Text>
                 </TouchableOpacity>
                 
                 <Text style={styles.or}>-----------   OR   -----------</Text>
                 <TouchableOpacity style={styles.fb}>
                 <MaterialCommunityIcons name='facebook' size={32} color='white' />
                     <Text style={styles.text}>Continue with Facebook</Text>
                 </TouchableOpacity>
                 <TouchableOpacity style={styles.google}>
                     <FontAwesome name='google' size={32} color='white' />
                     <Text style={styles.text}>Continue with Google</Text>
                 </TouchableOpacity>
                 
                 <Text>Dont have account?</Text>
                 <Text>Forgot your Password?</Text>
           </View>
        </TouchableWithoutFeedback>   
    )
}


const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',     
        paddingTop:40,   
    },
    input:{
        width:300,
        borderWidth:1,
        borderColor:'#ccc',
        padding:10,
        marginVertical:6,
        marginBottom: 10,
        flexDirection:'row',
        
    },
    signin:{
        fontSize:25,
        fontWeight:'bold',
        marginVertical:20
    },
    join:{
        fontSize:18,
        marginVertical:10,
        marginLeft:50,
        marginRight:20,
        alignItems:'center',
        justifyContent:'center'
        
    },
    btn:{
            width:300,
            marginVertical:20
    },
    or:{
        alignItems:'center'
    },
    sbtn:{
        padding:20,
        marginVertical:20,
        borderWidth:0.3,
        borderRadius:20,
        width:300,
        alignItems:'center',
        backgroundColor:'red',

    },
    fb:{
        padding:15,
        marginVertical:10,
        borderWidth:0.3,
        borderRadius:20,
        width:300,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#3b5998',
        flexDirection:'row'
    },
    google:{
        padding:15,
        marginVertical:10,
        borderWidth:0.3,
        borderRadius:20,
        width:300,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'red',
        flexDirection:'row'
    },
    text:{
        color:'white',
        marginHorizontal:10
    },
    inp:{
        width:280
    }
})