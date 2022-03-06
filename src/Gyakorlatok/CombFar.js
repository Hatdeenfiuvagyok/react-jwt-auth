import React, { Component } from 'react';
import {View, Image, FlatList, TouchableOpacity, Text  } from 'react-native-web';
import Gyakorlatok from './Gyakorlatok';

      //172.16.0.110
      //192.168.1.67
      //172.16.0.102
const ipcim="172.16.0.102";

export default class CombFar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading:true,
      isCollapsed:true,
      megnyomva:[]
    };
  }



  componentDidMount(){
    return fetch('http://localhost:8080/CombFar')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){

          
          
let m=this.state.megnyomva;
for (let elem of this.state.dataSource)
    m[elem.kepek_id]=true
this.setState({megnyomva:m})  


        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }


  kattintas=(sorszam)=>{
    //alert(sorszam)
    let m=this.state.megnyomva
    m[sorszam]=!m[sorszam]
    this.setState({megnyomva:m})
  }



  render() {
    return (
      <View>
      <FlatList
        data={this.state.dataSource}
        renderItem={({item}) => 
        <View style={{alignSelf:'center', marginTop:10}} >


        <Image  source={{uri: 'http://localhost:8080/'+item.kepek}} style={{height:450, width:800, marginBottom:20, alignSelf:'center'}} />
          
        <Text style={{paddingLeft:150,paddingRight:150,paddingTop:10, paddingBottom:10, fontSize: 20, textAlign:'justify', alignSelf:'center'}}>
          {item.kepek_leiras}
        </Text>
        </View>
      
      }
        keyExtractor={({izomcsoport_id}, index) => izomcsoport_id}
      />

      <Gyakorlatok/>
    </View>
    );
  }
}