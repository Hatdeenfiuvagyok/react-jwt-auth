import React, { Component } from 'react';
import {View, Image, FlatList, TouchableOpacity, Text  } from 'react-native-web';
import Sidebar from './AdatokTorlese';


export default class VallTorol extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading:true,
      isCollapsed:true,
      megnyomva:[]
    };
  }


  componentDidMount(){
    return fetch('http://localhost:8080/Vall')
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

  torles=(szam)=>{
    //alert(szam)
    var bemenet={
      bevitel1:szam
    }

  fetch('http://localhost:8080/adat_torles_vall', {
      method: "POST",
      body: JSON.stringify(bemenet),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    }
  
  )
  .then(x => x.text())
  .then(y => alert(y));

  }

  render() {
    return(
      <View>


      <FlatList
        data={this.state.dataSource}
        renderItem={({item}) => 
        <View style={{alignSelf:'center', marginTop:10}} >

        <Image  source={{uri: 'http://localhost:8080/'+item.kepek}} style={{height:450, width:800, marginBottom:20, alignSelf:'center'}} />
          
        <Text style={{paddingLeft:150,paddingRight:150,paddingTop:10, paddingBottom:10, fontSize: 18, textAlign:'justify', alignSelf:'center'}}>
          {item.kepek_leiras}
        </Text>
        
      <TouchableOpacity
        onPress={async ()=>this.torles(item.kepek_id)}
      >
        <Text style={{paddingLeft:380,paddingRight:390,paddingTop:10, paddingBottom:10, fontSize: 15, textAlign:'justify', alignSelf:'center', color:"black",backgroundColor:'red',borderBottomLeftRadius:10,borderBottomRightRadius:10,fontWeight:"bold", textAlign:'center'}}>
            Törlés
        </Text>
      </TouchableOpacity>

        </View>
        
      
      }
        keyExtractor={({izomcsoport_id}, index) => izomcsoport_id}
        
      />


      <Sidebar/>
      
    </View>
    
    );
  }
}