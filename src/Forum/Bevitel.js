import React, { Component } from 'react';
import { StyleSheet,Text, TextInput, View,TouchableOpacity } from 'react-native-web';

      //172.16.0.110
      //192.168.1.67
      //172.16.0.102
const ipcim="172.16.0.102";

export default class Bevitel extends Component {
  constructor(props) {
    super(props);
    this.state = {

        nev: '',
        komment:""
    };
  }

felvitel=async ()=>{
    //alert("megnyomva a gomb")

    if (this.state.nev=="" || this.state.komment=="")
    {
      alert("Add meg a nevet és a kommmentet!")
      return
    }
    let bemenet={
      bevitel1:this.state.nev,
      bevitel2:this.state.komment
    }

    fetch('http://localhost:8080/kommentfelvitel',{
      method: "POST",
      body: JSON.stringify(bemenet),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    }
       
    )
    .then((response) => response.text())
    .then((szoveg) => {

    alert(szoveg)
     this.props.frissit() 

})
    
}



  render() {
    return (
      <View >
        <View style={{borderRadius: 20,padding: 10, backgroundColor:'#dddddd',width:'100%', alignSelf:'center', border:"3px solid black"}}>
            <Text style={{color:'black'}}>
                Név:
            </Text>
          <TextInput
            placeholderTextColor="#dddddd"
            style={{backgroundColor:'white', marginBottom:15, borderRadius:10, height:30}}
            placeholder="Add meg a neved:"
            onChangeText={(nev) => this.setState({nev})}
            value={this.state.nev}
          />
  
          <Text style={{color:'black'}}>
                Komment:
            </Text>
          <TextInput
            placeholderTextColor="#dddddd"
            style={{backgroundColor:'white', marginBottom:15, borderRadius:10, height:30}}
            placeholder=" Add meg a kommentet:"
            onChangeText={(komment) => this.setState({komment})}
            value={this.state.komment}
          />
           <TouchableOpacity
            onPress={async ()=>this.felvitel()}>
            <View style={styles.gomb}>
              <Text style={styles.gombSzoveg}>Küldés</Text>
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
            borderRadius:10
    },
});