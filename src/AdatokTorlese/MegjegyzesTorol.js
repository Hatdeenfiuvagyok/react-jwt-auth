import React, { Component } from 'react';
import { StyleSheet,Text, TextInput, View,TouchableOpacity, FlatList, RefreshControl  } from 'react-native-web';
import Sidebar from './AdatokTorlese';

      //172.16.0.110
      //172.16.0.102
const ipcim="192.16.0.102";

export default class MegjegyzesTorol extends Component {
  constructor(props) {
    super(props);
    this.state = {

        dataSource:[]

    };
  }
  
  componentDidMount(){
    return fetch('http://localhost:8080/tema')
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




  ujratoltes=()=>{
    //alert(szam)
    this.setState({})

    return fetch('http://localhost:8080/tema')
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

  torles=(szam)=>{
    //alert(szam)
    var bemenet={
      bevitel1:szam
    }

  fetch('http://localhost:8080/adat_torles', {
      method: "POST",
      body: JSON.stringify(bemenet),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    }
  
  )
  .then(x => x.text())
  .then(y => alert(y));

  }



 
  render() {
    return (
        <View>
        <Text style={{fontSize:30, textAlign:'center', marginTop:25}}>Megjegyzések</Text>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => 

          <View style={{backgroundColor:'rgb(212, 212, 212)',borderBottomLeftRadius:15,borderBottomRightRadius:15, margin:10,width:'70%',alignSelf:'center'}}>

          <Text style={{color:"#dd00cc",fontSize:18,marginTop:5, marginLeft:10}}>
          {item.uzenet_nev} </Text>
          <Text style={{color:"black",fontSize:20, marginLeft:10}}>
          {item.uzenet_szoveg} </Text>
          <Text style={{color:"black",fontSize:12, marginRight:10, marginBottom:5, textAlign:'right'}}>
          {item.uzenet_datum} </Text>

          
          <TouchableOpacity
        onPress={async ()=>this.torles(item.uzenet_id)}
      >
        <Text style={{color:"black",backgroundColor:'red',borderBottomLeftRadius:10,borderBottomRightRadius:10,fontWeight:"bold",fontSize:15, textAlign:'center'}}>
            Törlés
        </Text>
      </TouchableOpacity>


          </View>



        
        }
    
          keyExtractor={({uzenet_id}, index) => uzenet_id}
        />
        <Sidebar/>
    </View>
    );
  }
}
