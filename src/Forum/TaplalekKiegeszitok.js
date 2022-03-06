import React, { Component } from 'react';
import { StyleSheet,Text, TextInput, View,TouchableOpacity, FlatList, RefreshControl  } from 'react-native-web';
import Bevitel from './Bevitel';

      //172.16.0.110
      //192.168.1.67
      //172.16.0.102
const ipcim="172.16.0.102";

export default class Megjegyzesek extends Component {
  constructor(props) {
    super(props);
    this.state = {
        nev: '',
        komment:"",

        dataSource:[]

    };
  }
  
  componentDidMount(){
    return fetch('http://localhost:8080/taplalekkiegeszitok')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){
        });
      })
      .catch((error) =>{
        console.error(error);
      });

  }
 
  render() {
    return (

        <View>

        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => 

          <View style={{paddingBottom: 25}}>

          <Text style={{fontSize:20}}>
          {item.kiegeszitok_nev} </Text>
          <Text >
          {item.kiegeszitok_leiras} </Text>
     
          
   
          </View>
        
        }
    
          keyExtractor={({uzenet_id}, index) => uzenet_id}
        />
    </View>
    );
  }
}
