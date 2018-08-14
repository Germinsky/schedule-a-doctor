import React, { Component } from 'react';
import { Text, View, StyleSheet,TouchableOpacity ,TouchableHighlight,Image,Alert,ImageBackground} from 'react-native';
import { Constants } from 'expo';
import DatePicker from 'react-native-datepicker'
import { StackNavigator } from 'react-navigation';
import * as ReactNavigation from 'react-navigation'
// You can import from local files
//import UrgentVisit from './UrgentVisit.js';
// or any pure javascript modules available in npm
import { Card,Button,Fab,Icon } from 'native-base'; // Version can be specified in package.json
import FindoctorReg from './FindoctorReg.js';
import FindoctorRating from './FindoctorRating.js';
import styles from '/style.js'
import CardFlip from 'react-native-card-flip';
import DashBoard from './DashBoard.js';
export default class Doctormenu extends Component {
   constructor(props){
    super(props)
    this.state = {
      datetime:"2016-Aug-11"
      }
  }
   	onURGENT() {
    this.props.navigation.navigate('FindoctorRating');
    //Alert.alert('You have selected UrgentRequest');
  }
   oniconbl()
  {
     this.props.navigation.navigate('DashBoard');
  }
  onicontl()
  {
    Alert.alert('Choose the desired date and time of your visit to doctor and tap the buttton to see available doctors');
  }
  render() {
    return (
      <View style={styles.container}>
        <CardFlip style={[styles.buttonContainer,{alignSelf:'center'}]} ref={(card) => this.card = card} >
     
      <ImageBackground source={require('./BackgroundImg.png')}
style={styles.backgroundImage} >
          <TouchableHighlight style={[styles.cardButton, styles.topLeft]}>
            <Image
              source={require('./left.png')}
              style={styles.buttonIconTopleft}
            />
          </TouchableHighlight>
          <TouchableHighlight style={[styles.cardButton, styles.topRight]}
           onPress={() => this.card.flip()}>
            <Image
              source={require('./info.png')}
              style={styles.buttonIconTopRight}
            />
          </TouchableHighlight>

          <View>
          <View style={styles.innercontainer}>
          <Text> {''}</Text>
          <Text> {''}</Text>
           <Text> {''}</Text>
          <Text> {''}</Text>
          <Text> {''}</Text>
          <Text> {''}</Text>
         
          <Text style={styles.paragraph}>
             
        What is the desired time of your visit ?
        </Text>
         <Text> {''}</Text>
          <Text> {''}</Text>
          <Text> {''}</Text>
          <Text> {''}</Text>
         
          <DatePicker
          style={{width: 300,alignSelf:'center'}}
          date={this.state.datetime}
          mode="datetime"
          format="YYYY-MMM-DD HH:mm"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          showIcon={false}
          onDateChange={(datetime) => {this.setState({datetime: datetime});}}
        />
         <Text> {''}</Text>
          <Text> {''}</Text>
         
          <Text> {''}</Text>
          <Text> {''}</Text>
         <Button block rounded
          //title={'URGENT'}
          style={{alignItems: 'center',width:300,height:60,backgroundColor:'#43266E',alignSelf:'center'}}
           onPress={this.onURGENT.bind(this)}
        >
		<Text style={{color:'#fff',textAlign:'center'}}>   FIND A DOCTOR  </Text>
		</Button> 
            </View>
</View>
         <TouchableHighlight style={[styles.cardButton, styles.bottomLeft]} onPress={this.oniconbl.bind(this)}>
            <Image
              source={require('./bleft.png')}
              style={styles.buttonIconBottomleft}
            />
          </TouchableHighlight>
         <TouchableOpacity activeOpacity={1} style={[styles.cardButton, styles.bottomRight]}  onPress={() => this.card.flip()}>
         
            <Image
              source={require('./bright.png')}
              style={styles.buttonIconBottomRight}
            />
         
          </TouchableOpacity>
         </ImageBackground>
       
       
                 <ImageBackground source={require('./BackgroundImg.png')}
                   style={styles.backgroundImage} >
          <TouchableHighlight style={[styles.cardButton, styles.topLeft]}>
              <Image
                source={require('./left.png')}
                style={styles.buttonIconTopleft}
              />
          </TouchableHighlight>
          <TouchableHighlight style={[styles.cardButton, styles.topRight]}
           onPress={() => this.card.flip()}>
            <Image
              source={require('./info.png')}
              style={styles.buttonIconTopRight}
            />
          </TouchableHighlight>
          <Text> {''}</Text>
          <View style={[styles.innercontainer,{alignItems:'center'}]}>
            <Text >{' '} </Text>
             <Text >{' '} </Text>
              <Text >{' '} </Text>
               <Text >{' '} </Text>
             <Text >{' '} </Text>
              <Text >{' '} </Text>
               <Text >{' '} </Text>
             <Text >{' '} </Text>
              <Text >{' '} </Text>
            <Text
              style={{
                textAlign: 'center',
           
                fontSize: 25,
                color: '#000',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
			Choose the desired date and time of your visit to doctor and tap the buttton to see available doctors      
            </Text>
         
          </View>

          <TouchableHighlight style={[styles.cardButton, styles.bottomLeft]}>
            <Image
              source={require('./bleft.png')}
              style={styles.buttonIconBottomleft}
            />
         
          </TouchableHighlight>
            <TouchableOpacity activeOpacity={1} style={[styles.cardButton, styles.bottomRight]}  onPress={() => this.card.flip()}>
         
            <Image
              source={require('./bright.png')}
              style={styles.buttonIconBottomRight}
            />
         
          </TouchableOpacity>
         </ImageBackground>
       
        
         </CardFlip> 
        </View>
      
    );
  }
}

