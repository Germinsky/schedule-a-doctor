import React, { Component } from 'react';
import { Text, View, StyleSheet,Alert,TouchableOpacity,Modal ,TouchableHighlight,Image,ImageBackground} from 'react-native';
import { Constants, MapView, Location, Permissions } from 'expo';
import { Card } from 'react-native-elements';
import {Button} from 'native-base';
import * as ReactNavigation from 'react-navigation'
import { scale, moderateScale, verticalScale } from 'react-native-size-matters';
import { StackNavigator } from 'react-navigation';
import SetAlert from './SetAlert.js'
import Dialog from "react-native-dialog";
import CardFlip from 'react-native-card-flip';
import styles from '/style.js'
export default class VisitDeclined extends Component {
  state = {
    dialogVisible: false,
    modalVisible: false,
  };
  
alert()
{
   //this.setModalVisible(true);


 this.props.navigation.navigate('Findoctor');
}
 	onURGENT() {
    this.props.navigation.navigate('Findoctor');
    //Alert.alert('You have selected UrgentRequest');
  }
  close()
{
   this.setModalVisible(!this.state.modalVisible);
 this.props.navigation.navigate('selectdr');
}
onicontr()
{
  Alert.alert('See the details of your declined visit with the doctor requested.Tab the button Find a doctor to get the list  of the doctors available for the date requested.');
}

  render() {
    return (
      <View style={styles.container}>
	     <CardFlip style={[styles.buttonContainer,{alignSelf:'center'}]} ref={(card) => this.card = card} >
    
        <ImageBackground source={require('./BackgroundImg.png')}
style={styles.backgroundImage} >
     <TouchableHighlight style={[styles.cardButton, styles.topLeft]} onPress={this.alert.bind(this)}>
            <Image
              source={require('./left.png')}
              style={styles.buttonIconTopleft}
            />
          </TouchableHighlight>
          <TouchableHighlight style={[styles.cardButton, styles.topRight]}
           onPress={this.onicontr.bind(this)}>
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
        Visit Declined       </Text>
        <Text> {''}</Text>
      <Text> {''}</Text>
 
 
 <Text> {''}</Text>
 <View style={{flexDirection:'row',flexWrap:'wrap',}}>
    <View style={{flexDirection:'column',flexWrap:'wrap',alignItems:'left'}}>
        <Text style={{textAlign:'left', fontSize:20,color:'#000'}}>
      Today {'  '} {'  '}
        </Text>
         
 </View>
 <View style={{flexDirection:'column',flexWrap:'wrap',alignItems:'right'}}>
      <Text style={{textAlign:'right', fontSize:20,color:'#000'}}>
        03: 00 PM
        </Text>
        </View>
        </View>
        <Text> {''}</Text>
 
      <Text style={{textAlign:'left', fontSize:20,color:'#000'}}>
             Dr. Alicee {'  '}
        </Text>
        <Text> {''}</Text>
 
        <Text style={{textAlign:'left', fontSize:20,color:'#000'}}>
         Thomas Clinic  {''}  0.5 km
        </Text>
         <Text> {''}</Text>
 <Text style={{textAlign:'left', fontSize:20,color:'#000'}}>
         Urgent Visit
        </Text>
         <Text> {''}</Text>
  <Text style={{textAlign:'left', fontSize:20,color:'#000'}}>
         Status  {'  '} Declined
        </Text>
 <Text> {''}</Text>
     <TouchableOpacity >
    <Button block rounded        //title={'URGENT'}
          onPress={this.alert.bind(this)}
         style={{alignItems: 'center',width:300,height:60,backgroundColor:'#43266E',alignSelf:'center'}}
          >
          <Text style={{color:'#fff',textAlign:'center'}}>  SET AN ALERT </Text>
          </Button>
        </TouchableOpacity>
       
			 																			
			 
				
	       
      </View>
         <TouchableHighlight style={[styles.cardButton, styles.bottomLeft]} >
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
           onPress={this.onicontr.bind(this)}>
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
			 See the details of your declined visit with the doctor requested.Tab the button Find a doctor to get the list  of the doctors available for the date requested.       </Text>
         
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
