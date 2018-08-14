import React, { Component } from 'react';
import { Text, View, StyleSheet,Alert,TouchableOpacity,Modal ,ImageBackground,TouchableHighlight,Image} from 'react-native';
import { Constants, MapView, Location, Permissions } from 'expo';
import { Card } from 'react-native-elements';
import {Button} from 'native-base';
import * as ReactNavigation from 'react-navigation'
import { scale, moderateScale, verticalScale } from 'react-native-size-matters';
import { StackNavigator } from 'react-navigation';
import SetAlert from './SetAlert.js'
import Dialog from "react-native-dialog";
import styles from '/style.js'
import CardFlip from 'react-native-card-flip';
import FindoctorReg from './FindoctorReg.js';
export default class VisitDoctorPre extends Component {
  state = {
    dialogVisible: false,
    modalVisible: false,
  };
  
 
alert(name,clinic,time,duration)
{
   
 this.props.navigation.navigate('SetAlert',{name:name,clinic:clinic,time:time,duration:duration});
}
 	onURGENT() {
    this.props.navigation.navigate('FindoctorReg');
    //Alert.alert('You have selected UrgentRequest');
  }
  close()
{
   this.setModalVisible(!this.state.modalVisible);
 this.props.navigation.navigate('selectdr');
}
onicontr()
{
  Alert.alert('See the details of your confirmed visit with the doctor requested. Set an alert to be reminded of the visit,so you will not miss it')
}

  render() {
    return (
      <View style={styles.container}>
	   
      <CardFlip style={[styles.buttonContainer,{alignSelf:'center',alignItems:'center',backgroundColor:'#fff'}]} ref={(card) => this.card = card} >
        
        <ImageBackground source={require('./BackgroundImg.png')}
style={styles.backgroundImage} >
     <TouchableHighlight style={[styles.cardButton, styles.topLeft]} onPress={this.alert.bind(this)}>
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
        Visit Confirmed       </Text>
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
       {this.props.navigation.state.params.time} 
        </Text>
        </View>
        </View>
        <Text> {''}</Text>
 
      <Text style={{textAlign:'left', fontSize:20,color:'#000'}}>
            {this.props.navigation.state.params.name} {'  '}
        </Text>
        <Text> {''}</Text>
 
        <Text style={{textAlign:'left', fontSize:20,color:'#000'}}>
        {this.props.navigation.state.params.clinic}  {''}   {this.props.navigation.state.params.duration}  
        </Text>
         <Text> {''}</Text>
 <Text style={{textAlign:'left', fontSize:20,color:'#000'}}>
         Regular Visit
        </Text>
         <Text> {''}</Text>
  <Text style={{textAlign:'left', fontSize:20,color:'#000'}}>
         Status  {'  '} Confirmed
        </Text>
 <Text> {''}</Text>
     <TouchableOpacity >
    <Button block rounded        //title={'URGENT'}
          onPress={()=>{this.alert( this.props.navigation.state.params.name, this.props.navigation.state.params.clinic , this.props.navigation.state.params.time, this.props.navigation.state.params.duration,)}}
         style={{alignItems: 'center',width:300,height:60,backgroundColor:'#43266E',alignSelf:'center'}}
          >
          <Text style={{color:'#fff',textAlign:'center'}}>  SET AN ALERT </Text>
          </Button>
        </TouchableOpacity>
       
	       
      </View>
         <TouchableHighlight style={[styles.cardButton, styles.bottomLeft]} onPress={()=> this.onURGENT.bind(this)}>
            <Image
              source={require('./bleft.png')}
              style={styles.buttonIconBottomleft}
            />
          </TouchableHighlight>
          <TouchableHighlight style={[styles.cardButton, styles.bottomRight]} onPress={()=> this.card.flip()}>
            <Image
              source={require('./bright.png')}
              style={styles.buttonIconBottomRight}
            />
          </TouchableHighlight>
          </ImageBackground >
        
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
			 See the details of your confirmed visit with the doctor requested. Set an alert to be reminded of the visit,so you will not miss it       </Text>
         
          </View>

          <TouchableHighlight style={[styles.cardButton, styles.bottomLeft]}
           onPress={this.onURGENT.bind(this)}>
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