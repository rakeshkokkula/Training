import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Button } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import axios from 'axios';

class ViewList extends React.Component{
    constructor(){
        super()
        this.state={
            data:[]
        }
    }
    // fetchData= async() => {
    //     const response = await fetch('http://192.168.0.7:4000/data');
    //     const users = await response.json();
    //     // .then(response => response.json())
    //   console.warn(users)
    //     this.setState({data: users});
    // }

    test(){
        fetch('http://192.168.0.7:4000/data')
          .then(response => response.json())
          .then(users => this.setState({data:users}))
          
      }
    //   delete({item}){
    //       const data = this.state.data[item].Id
    //       axios.delete('http://192.168.0.7:4000/delete', data)
    //   }
    
    

    ComponentDidMount(){

       this.test();
        // this.fetchData();
        // axios.get('http://192.168.0.7:4000/data')
        // .then(res => {
        //     const persons = res.data;
        //     this.setState({ persons });
        //   })
          
    }

    render(){
    return(

        <View style={styles.container}>
            {/* <Text style={styles.text}>This is ViewList</Text> */}
            <View style={styles.list}>
                <Text style={styles.text1}>Id</Text>
                <Text style={styles.text2}>Name</Text>
                <Text style={styles.text3}>Email</Text>
                <Text style={styles.text4}>Phone</Text>
                <Text style={styles.text5}>Message</Text>
            </View>
        <FlatList
            data={this.state.data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => 
            <View style={styles.list}>
                <Text style={styles.text1}>{item.Id}</Text>
                <Text style={styles.text2}>{item.Name}</Text>
                <Text style={styles.text3}>{item.Email}</Text>
                <Text style={styles.text4}>{item.Phone}</Text>
                <Text style={styles.text5}>{item.Message}</Text>
                <TouchableOpacity >
                <MaterialIcons 
                name='delete'
                size={32} 
                style={styles.del}
                />
                </TouchableOpacity>
            </View>
            }
        />
            <TouchableOpacity onPress={this.test()}>
                <Text >Get</Text>
            </TouchableOpacity>
        </View>
    )
}
}
export default ViewList

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#eee',
        alignItems:'center',     
        paddingTop:40,   
    },
    text:{
        fontSize:18,

    },
    list:{
        flexDirection:'row',
        marginVertical:10
    },
    text1:{
        marginHorizontal:6,
        fontSize:16,
        width:20
    },
    text2:{
        marginHorizontal:6,
        fontSize:16,
        width:60
    },
    text3:{
        marginHorizontal:6,
        fontSize:16,
        width:80
    },
    text4:{
        marginHorizontal:6,
        fontSize:16,
        width:60
    },
    text5:{
        marginHorizontal:6,
        fontSize:16,
        width:80
    },
    
})