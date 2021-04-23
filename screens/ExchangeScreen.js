import React,{Component} from "react";
import {
  TextInput,
  TouchableOpacity,
  Text,
  View,
  TouchableOpacityBase,
  KeyboardAvoidingView,
  Image,
  StyleSheet
} from "react-native";
import db from "../config";
import firebase from 'firebase'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MyHeader from '../components/MyHeader'

export default class ExchangeScreen extends Component {
  constructor() {
    super();
    this.state = {
      //userName:firebase.auth().currentUser.email,
      itemName: "",
      description: "",
    };
  }
  addItem = (itemName, description) => {
    //var userName=this.state.userName
    db.collection('exchange_requests').add({
     //'userName':userName,
      'item_name': itemName,
      'item_description': description
    });
    this.setState({
      itemName: "",
      description: "",
    });
  };
  // return Alert.alert( 'Item ready to exchange', 
  // '', 
  // [ {text: 'OK', onPress: () => { this.props.navigation.navigate('HomeScreen') }} ] 
  // ); }

  render() {
    return (
      <SafeAreaProvider>

      <View style={{flex:1, backgroundColor:'rgb(236, 236, 236)'}}>
      <MyHeader title="Exchange" navigation={this.props.navigation}/>
      <KeyboardAvoidingView style={{flex:1,justifyContent:'center', alignItems:'center'}}>
     <View style={styles.boxes}>
      <TextInput 
      placeholder={"Item name" }
      maxLength={8}
      onChangeText={(text)=>{this.setState({itemName:text})}}
      value={this.state.itemName}
      style={styles.box1}
      />
      <TextInput 
      multiline
      numberOfLines={4}
      placeholder={"Description" }
      onChangeText={(text)=>{this.setState({description:text})}}
      value={this.state.description}
      style={styles.box2}
      />
      </View>
        <TouchableOpacity
        style={styles.button}
          onPress={()=>{this.addItem(this.state.itemName, this.state.description)}}
        >
          <Text style={{color:'#90A5A9', fontWeight:'bold'}}>Add Item</Text>
        </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
      </SafeAreaProvider>
    );
   
  }
}

const styles = StyleSheet.create({
  box1:{
    borderWidth:2,
    borderColor:'black',
    padding:10,
    marginBottom:20
  },
  box2:{
    borderWidth:2,
    borderColor:'black',
    padding:10,
  },
  boxes:{
    padding:20
  },
  button: {
    width:"75%",
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    backgroundColor:"#eaf8fe",
    shadowColor: "#90A5A9",
    shadowOffset: {
       width: 0,
       height: 8,
    },
    shadowOpacity: 0.4,
    shadowRadius: 10.32,
    elevation: 16,
    marginTop:20
    },
    header:{
      justifyContent: "center",
      alignSelf: "center",
      fontSize: 30,
      color: "black",
      margin: 50,
    }
})