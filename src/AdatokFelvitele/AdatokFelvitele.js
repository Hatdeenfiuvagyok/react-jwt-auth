
import React, { Component } from 'react';
import {View, Image, FlatList, TouchableOpacity, Text, StyleSheet, TextInput, Picker  } from 'react-native-web';
import PickerMenu from './PickerMenu';
import FileUpload from "./FileUpload";

      //172.16.0.110
      //192.168.1.67
const ipcim="192.168.1.67";



export default class MellFelvitel extends Component {


  constructor(props) {
    super(props);
    this.state = {
      isLoading:true,
      isCollapsed:true,
      megnyomva:[],

      
      kep:'',
      id:'',
      leiras:''
    };
  }


  componentDidMount(){
    return fetch('http://'+ipcim+':8080/Mell')
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



  
  kivalaszt=async (szam)=>{
    //alert(szam)
    this.setState({akttema:szam})

    let bemenet={
      bevitel4:szam
    }
    return fetch('http://192.168.20.102:3000/temalekerdez',{
      method: "POST",
      body: JSON.stringify(bemenet),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    }
       
    )
    .then((response) => response.json())
    .then((responseJson) => {

      this.setState({
        isLoading: false,
        dataSource2: responseJson,
      }, function(){

        //alert(JSON.stringify(this.state.dataSource2))
      });

    })
    .catch((error) =>{
      console.error(error);
    });

  }





felvitel=async ()=>{
    //alert("megnyomva a gomb")

    
    let bemenet={
      bevitel1:this.state.nev,
      bevitel2:this.state.komment,
      bevitel3:this.state.leiras
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
    <FileUpload></FileUpload>
    return(
        
        <View style={{alignSelf:'center'}}>

          <PickerMenu/>


            <View style={{backgroundColor:'grey', width:'50%', alignSelf:'center'}}>
            <Text style={{color:'black', alignSelf:'center'}}>
                Kép
            </Text>
          <Text style={{color:'black', alignSelf:'center'}}>
                Gyakorlat leírása
            </Text>
            <TextInput
            placeholderTextColor="#dddddd"
            style={{backgroundColor:'white', marginBottom:15, borderRadius:10, height:30, width:'50%', alignSelf:'center'}}
            placeholder="Gyakorlat leírása"
            onChangeText={(leiras) => this.setState({leiras})}
            value={this.state.leiras}
          />
           <TouchableOpacity
            onPress={async ()=>this.felvitel()}>
            <View style={styles.gomb}>
              <Text style={styles.gombSzoveg}>Adatok Felvitele</Text>
            </View>
          </TouchableOpacity> 
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