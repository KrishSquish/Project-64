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
import Header from '../components/header';
import dictionary from '../database';

export default class HomeScreen extends Component{
    getWord=(text)=>{
        var text=text.toLowerCase()
        try{
            var word = dictionary[text]["word"]
            var lexicalCategory = dictionary[text]["lexicalCategory"]
            var definition = dictionary[text]["definition"]
        
            this.setState({
                "word":word,
                "definition":definition,
                "lexicalCategory":lexicalCategory
            })
        }
        catch(err){
            alert("Sorry this word is not available for now")
            this.setState([{
                'text':'',
                'isSearchPressed':false
            }])
        }
    }
    
    constructor(){
        super()
            this.state = {
                text:"",
                isSearchedPressed:false,
                word:"",
                lexicalCategory:'',
                examples:[],
                definition:"",
            }
    }

    render(){
        return(
            <View style={styles.container}>
                <Header/>
                <TextInput style = {styles.inputBox}
                    placeholder={'Submit Word Here'}
                    placeholderTextColor={'white'}
                    onChangeText={text=> {
                        this.setState({
                            text:text,
                            isSearchedPressed:false,
                            word:"Loading...",
                            lexicalCategory:'',
                            examples:[],
                            definition:"",                            
                        })
                    }}
                    value ={this.state.text}
                />
                <TouchableOpacity style={styles.searchButton}
                    onPress={()=>{
                        this.setState({isSearchedPressed:true})
                        this.getWord(this.state.text)
                    }}                >
                    <Text style ={styles.searchText}>
                        Search
                    </Text>

                </TouchableOpacity>

                <View style={styles.detailsContainer}>
                    <Text style = {styles.detailsTitle}>
                        Word:{""}
                    </Text>
                    <Text style= {{fontSize:18}}> 
                        {this.state.word}
                    </Text>
                </View>
                <View style={styles.detailsContainer}>
                    <Text style = {styles.detailsTitle}>
                        Type:{""}
                    </Text>
                    <Text style= {{fontSize:18}}> 
                        {this.state.lexicalCategory}
                    </Text>
                </View>
                <View style={styles.detailsContainer}>
                    <Text style = {styles.detailsTitle}>
                        Definition:{""}
                    </Text>
                    <Text style= {{fontSize:18}}> 
                        {this.state.definition}
                    </Text>
                </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#BA68C8',
    alignContent:"center",
  },
    inputBox:{
        margin:10,
        marginTop:20,
        width:'80%',
        height: 40,
        alignItems:'center',
        justifyContent:'center',
        alignSelf:"center",
        textAlign:"center",
        borderColor:"#2f0a43",
        borderWidth: 4,

        
    },
    searchButton:{
        alignItems:"center",
        alignSelf:"center",
        margin:10,
        backgroundColor:"#f0d4f1",
        padding:20,
        borderRadius:20,
        width:'40%' 
        
    },
    detailsContainer:{
        flexDirection:'row',
        flexWrap:'wrap'
    },
    detailsTitle:{
        fontWeight:"bold",
        fontSize:25    
    }

        
    
})