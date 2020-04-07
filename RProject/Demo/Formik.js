import React from 'react';
import {StyleSheet,TextInput, View, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard, ImageBackground} from 'react-native';
// import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import { Formik } from 'formik'


export default function Form({ addReview }) {
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <ImageBackground source={require('../assets/bg.jpg')} style={{width: '100%', height: '100%'}} blurRadius={2} >
        <View>
             <Text>Registration Form</Text>
        </View> 
        <Formik
        initialValues={{ title: '', body: '', rating: '' }}
        
        onSubmit={(values, actions) => {
          actions.resetForm(); 
          addReview(values);
        }}
      >
        <View>
            <Text style={styles.text}>Name:</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your Name" 
                />
                </View>
                <View>
                <Text style={styles.text}>Email:</Text>
            <TextInput
                style={styles.input}
                placeholder='E-mail'
                 />
                 </View>
                 </Formik>
        </ImageBackground>
       
        </TouchableWithoutFeedback>
    )
}


const styles=StyleSheet.create({
    container:{
        flex:1,
        // backgroundColor:'#eee',
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
})