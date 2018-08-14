import React, { Component } from 'react';
import { Text, View, StyleSheet,Alert,ImageBackground,TouchableOpacity,Modal,TouchableHighlight,Image,Platform } from 'react-native';
import { Constants, MapView, Location, Permissions , Notifications} from 'expo';
import { Card } from 'react-native-elements';
import {Button} from 'native-base';
import * as ReactNavigation from 'react-navigation'
import { scale, moderateScale, verticalScale } from 'react-native-size-matters';
import { StackNavigator  } from 'react-navigation';
import VisitDeclined from './VisitDeclined.js'
import Findoctor from './Findoctor.js'
import Doctormenu from './Doctormenu.js'
import CardFlip from 'react-native-card-flip';
import Dialog from "react-native-dialog";
import styles from './style.js';

export default class selectdr extends Component {
  state = {
    dialogVisible: false,
    modalVisible: false,
  };
  
alert()
{

 this.props.navigation.navigate('VisitDeclined');
}
alertback()
{
  this.props.navigation.navigate('Findoctor');

}
oniconbl(){
  Alert.alert('Review the urgent details you want to schedule and tap the button to send request to doctor selected');
}
 	onURGENT() {
    this.props.navigation.navigate('VisitDeclined');
    //Alert.alert('You have selected UrgentRequest');
  }
  close()
{
   this.setModalVisible(!this.state.modalVisible);
// this.props.navigation.navigate('selectdr');
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
          <View style={styles.innercontainer}>
          
            <Text> {''}</Text>
            
            <Text> {''}</Text>
            
            <Text> {''}</Text>
            
            <Text> {''}</Text>
            
        <Text style={styles.paragraph}>
          Urgent visit        </Text>
        <Text> {''}</Text>
      <Text> {''}</Text>
 
 
 
 <Text> {''}</Text>
 <View style={{flexDirection:'row',flexWrap:'wrap',}}>
    <View style={{flexDirection:'column',flexWrap:'wrap',}}>
        <Text style={{textAlign:'left', fontSize:20,color:'#000'}}>
      Today  {''}
        </Text>
        </View>
        <Text style={{textAlign:'center', fontSize:20,color:'#000'}}>
    {''}
        </Text>
        <View style={{flexDirection:'column',flexWrap:'wrap',}}>
      <Text style={{textAlign:'right', fontSize:20,color:'#000'}}>
         03: 00 PM
        </Text>
        </View>
        </View>
        <Text> {''}</Text>
 
      <Text style={{textAlign:'left', fontSize:20,color:'#000'}}>
             Dr. Alicee      </Text>
        <Text> {''}</Text>
 
        <Text style={{textAlign:'left', fontSize:20,color:'#000'}}>
         Thomas Clinic
        </Text>
         <Text> {''}</Text>
         <Text> {''}</Text>
 
     <TouchableOpacity  onPress={()=>{this.alert.bind(this)}} >
    <Button block rounded    //title={'URGENT'}
         
         style={{alignItems: 'center',width:300,backgroundColor:'#43266E',height:60,alignSelf:'center'}}
          >
          <Text style={{color:'#fff',textAlign:'center'}}>  SEND REQUEST</Text>
          </Button>
        </TouchableOpacity>
       </View>
       <TouchableHighlight style={[styles.cardButton, styles.bottomLeft]} onPress={this.alertback.bind(this)}>
            <Image
              source={require('./bleft.png')}
              style={styles.buttonIconBottomleft}
            />
          </TouchableHighlight>
          <TouchableHighlight style={[styles.cardButton, styles.bottomRight]}  onPress={() => this.card.flip()}>
            <Image
              source={require('./bright.png')}
              style={styles.buttonIconBottomRight}
            />
          </TouchableHighlight>
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
            <Text
              style={{
                textAlign: 'center',
                fontSize: 25,
                color: '#000',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
			       Review the urgent details you want to schedule and tap the button to send request to doctor selected
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
