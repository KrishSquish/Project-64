import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Alert
} from 'react-native';

export default class Header extends Component{
    render(){
        return(
            <View style = {{backgroundColor:'purple'}}>
                <Text style = {{
                    alignSelf:'center',
                    color:'white',
                    fontWeight:'bold',
                    fontSize:25,
                    }}>
                        Pocket Dictionary
                </Text>
            </View>
        )
    }
}