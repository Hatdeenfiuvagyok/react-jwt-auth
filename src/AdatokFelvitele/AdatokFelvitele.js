
import React, { Component } from 'react';
import {View, Image, FlatList, TouchableOpacity, Text, StyleSheet, TextInput, Picker  } from 'react-native-web';
import FileUpload from "./Upload";

      //172.16.0.110
      //192.168.1.67
      //172.16.0.102
const ipcim="192.16.0.102";



export default class AdatokFelvitele extends Component {


  constructor(props) {
    super(props);
    this.state = {
      valaszt:'',
      isLoading:true,
      isCollapsed:true,
      megnyomva:[],
      valaszt:1,
      dataSource_izomcsoport:[],

      
      kepek:'',
      id:'',
      kepek_leiras:''
    };
  }


  componentDidMount(){
    return fetch('http://localhost:8080/izomcsoportok')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource_izomcsoport: responseJson,
        }, function(){
          //alert(JSON.stringify(responseJson));
        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }






felvitel=async ()=>{
    //alert("megnyomva a gomb")
    
    let bemenet={
      bevitel3:this.state.kepek_leiras,
      bevitel1:this.state.kepek,
      bevitel2:this.state.valaszt
    }

    fetch('http://'+ipcim+':8080/adat_felvitel',{
      method: "POST",
      body: JSON.stringify(bemenet),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    }
       
    )
    .then((response) => response.text())
    .then((szoveg) => {

    alert(szoveg)

})
    
}

  
  render() {
    return(
        
        <View style={{alignSelf:'center'}}>
          
         



            <View style={{backgroundColor:'grey', width:'50%', alignSelf:'center'}}>

            <Text style={{color:'black', alignSelf:'center'}}>
                Gyakorlat leírása
            </Text>
            <TextInput
            placeholderTextColor="#dddddd"
            style={{backgroundColor:'white', marginBottom:15, borderRadius:10, height:30, width:'70%', alignSelf:'center'}}
            placeholder="Gyakorlat leírása"
            onChangeText={(kepek_leiras) => this.setState({kepek_leiras})}
            value={this.state.kepek_leiras}
          />

          
          <Text style={{color:'black', alignSelf:'center'}}>
            Kép
          </Text>
          <TextInput
            placeholderTextColor="#dddddd"
            style={{backgroundColor:'white', marginBottom:15, borderRadius:10, height:30, width:'70%', alignSelf:'center'}}
            placeholder="Kép neve"
            onChangeText={(kepek) => this.setState({kepek})}
            value={this.state.kepek}
          />

        <Picker
        selectedValue={this.state.valaszt}
        style={{ height: 50, marginBottom: 10, marginLeft: 10, marginRight: 10 }}
        onValueChange={(itemValue, itemIndex) => this.setState({valaszt:itemValue})}
        >
        {this.state.dataSource_izomcsoport.map((item) => (
          <Picker.Item key={item.izomcsoport_id} label={item.izomcsoport_nev} value={item.izomcsoport_id} />
        ))}
       
       
      </Picker>

          <FileUpload kepek_leiras={this.state.kepek_leiras} kepek={this.state.kepek} id={this.state.valaszt}></FileUpload>
        </View>
      
    </View>
    );
  }
}

const styles = StyleSheet.create({
    gombSzoveg:{
            textAlign:'center',
            color:'white',
            marginTop:'auto',
            marginBottom:'auto',
            fontSize:25
    },
    gomb:{
            height:45,
            backgroundColor:'blue',
            width:'45%',
            alignSelf:'center',
            borderRadius:10,
            marginBottom:10
    },
});