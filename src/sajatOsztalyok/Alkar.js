import React, { Component } from 'react';
import {View, Image, FlatList, TouchableOpacity, Text } from 'react-native-web';
import Gyakorlatok from '../SidebarGyakorlatok/Gyakorlatok';

const ipcim="172.16.0.110";

export default class Alkar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading:true,
      isCollapsed:true,
      megnyomva:[]
    };
  }

  componentDidMount(){
    return fetch('http://'+ipcim+':8080/Alkar')
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
        <View  style={{alignSelf:'center', marginTop:10}} >

        
          <TouchableOpacity
        onPress={()=>this.kattintas(item.kepek_id)}
        >

        <Image  source={{uri: 'http://'+ipcim+':8080/'+item.kepek}} style={{height:300, width:400, marginBottom:20}} />
          
        </TouchableOpacity>

        </View>
      
      }
        keyExtractor={({izomcsoport_id}, index) => izomcsoport_id}
      />

      <Gyakorlatok/>
    </View>
  );
  }
}