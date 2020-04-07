import React from 'react';
import {StyleSheet,TextInput, View, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard, ImageBackground} from 'react-native';
// import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import axios from 'axios';

class ContactUs extends React.Component {
 constructor() {
  super()
         this.state = {
          persons: [],
          users: []
        }
        
        this.onSubmit = this.onSubmit.bind(this);
    }
    // handleInputChange(event) {
    //     const { name, value } = event.target
    //     this.setState({
    //         [name]: value
    //     })
    //   }
        
        handleNameChange = (value) => {
            this.setState({name:value})
        }
        handleEmailChange = (value) => {
            this.setState({email:value})
        }
        handlePhoneChange = (value) => {
            this.setState({phone:value})
        }
        handleMessageChange = (value) => {
            this.setState({message:value})
        }
    
      onSubmit(e) {
        
        const data = {
          name: this.state.name,
          email: this.state.email,
          phone: this.state.phone,
          message:this.state.message
        }
        console.log(data);
        axios.post('http://192.168.0.7:4000/sent', data)
        
        // .then(res => {
        //     const persons = res.data;
        //     this.setState({ persons });
        //   })        
    }  
    render(){    
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <ImageBackground source={require('../assets/bg.jpg')} style={{width: '100%', height: '100%'}} blurRadius={2} >
          <View style={styles.container}>
            <View>
            <Text style={styles.text}>Name:</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your Name" 
                name='name'
                value={this.state.name}
                onChangeText={this.handleNameChange}
                />
                </View>
                <View>
                <Text style={styles.text}>Email:</Text>
            <TextInput
                style={styles.input}
                placeholder='E-mail'
                name='email'
                keyboardType='email-address'
                value={this.state.email}
                onChangeText={this.handleEmailChange}
                 />
                 </View>
                 <View>
                 <Text style={styles.text}>Phone:</Text>
                 <TextInput
                style={styles.input}
                placeholder='Phone Number'          
                name='phone'
                keyboardType='numeric'
                value={this.state.phone}
                onChangeText={this.handlePhoneChange}
                 />
                 </View>
                 <View>
                 <Text style={styles.text}>Message:</Text>
                 <TextInput
                 multiline minHeight={100}
                style={styles.input}
                placeholder='Message'
                name='message'
                value={this.state.message}
                onChangeText={this.handleMessageChange}
                 />
                 </View>
            <TouchableOpacity style={styles.submit} onPress={this.onSubmit}>
                <Text style={styles.text1}>Submit</Text>
            </TouchableOpacity>
    <Text>{this.state.name}</Text>
          </View>
          </ImageBackground>
          </TouchableWithoutFeedback>
    )
}
}
export default ContactUs

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
    submit:{
        padding:15,
        marginVertical:20,
        borderWidth:0.3,
        borderRadius:20,
        width:300,
        alignItems:'center',
        backgroundColor:'#2196F3',

    },
    text:{
        fontSize:18
    },
    register:{
        fontSize:25,
        fontWeight:'bold',
        marginVertical:30
    },
    text1:{
        marginHorizontal:10,
        fontSize:18,
        color:'white'
    }
})
