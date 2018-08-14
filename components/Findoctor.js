import React, { Component } from 'react';
import { Text, View, StyleSheet ,TouchableOpacity,FlatList,TouchableHighlight,Image,Alert,ImageBackground} from 'react-native';
import { Constants, MapView, Location, Permissions } from 'expo';
import { Card } from 'react-native-elements';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters';
import Confirmvisit from './Confirmvisit.js';
import * as ReactNavigation from 'react-navigation';
import { StackNavigator ,NavigationActions} from 'react-navigation';
import styles from './style.js'
import selectdr from './selectdr.js'
import UrgentScreen from './UrgentScreen.js'
import CardFlip from 'react-native-card-flip';
const clinicdetails=[
{
"doctorname":"Dr.Johnson",
"clinicname":"Jonsan Clinic",
"duration":"0.5 km",
"time":"3:00 PM",
latitude:12.9754,
longitude:80.2206,
latitudeDelta:  0.2,
	longitudeDelta:0.2 ,
  title:'Jonsan Clinic',
  route:'Confirmvisit'
   

},

{
"doctorname":"Dr.Ellens",
"clinicname":"Edward Clinic",
"duration":"1.5 km",
"time":"2:00 PM",
 latitude:12.9010,longitude:80.2279,latitudeDelta:  0.2,
	longitudeDelta:0.2 ,
   title:'Thomas Clinic',
   route:'selectdr'
},{
"doctorname":"Dr.Nelson",
"clinicname":"Nelson Clinic",
"duration":"1.5 km",
"time":"2:00 PM",
 latitude:12.9010,longitude:80.2279,latitudeDelta:  0.2,
	longitudeDelta:0.2 ,
   title:'Nelson Clinic',
   route:'selectdr'
},
{
"doctorname":"Dr.Marvel",
"clinicname":"Marvel Clinic",
"duration":"0.2 km",
"time":"1:00 PM",
 latitude:12.9000,
 longitude:80.2709,
 latitudeDelta:  0.2,
	longitudeDelta:0.2 ,
 title:'Marvel Clinic',
 route:'Confirmvisit'
}
];
export default class Findoctor extends Component {
  
constructor(props)
{
  super(props);
  this.state=
  {
clinicdetails :[
{
"doctorname":"Dr.Johnson",
"clinicname":"Jonsan Clinic",
"duration":"0.5 km",
"time":"3:00 PM",
latitude:12.9754,
longitude:80.2206,
latitudeDelta:  0.2,
	longitudeDelta:0.2 ,
  title:'Jonsan Clinic',
  route:'Confirmvisit'
   

},

{
"doctorname":"Dr.Ellens",
"clinicname":"Edward Clinic",
"duration":"1.5 km",
"time":"2:00 PM",
 latitude:12.9010,longitude:80.2279,latitudeDelta:  0.2,
	longitudeDelta:0.2 ,
   title:'Thomas Clinic',
   route:'selectdr'
},{
"doctorname":"Dr.Nelson",
"clinicname":"Nelson Clinic",
"duration":"1.5 km",
"time":"2:00 PM",
 latitude:12.9010,longitude:80.2279,latitudeDelta:  0.2,
	longitudeDelta:0.2 ,
   title:'Nelson Clinic',
   route:'selectdr'
},
{
"doctorname":"Dr.Marvel",
"clinicname":"Marvel Clinic",
"duration":"0.2 km",
"time":"1:00 PM",
 latitude:12.9000,
 longitude:80.2709,
 latitudeDelta:  0.2,
	longitudeDelta:0.2 ,
 title:'Marvel Clinic',
 route:'Confirmvisit'
},
],
  };
}

onURGENT(name,clinicname,time,duration)
{
this.props.navigation.navigate('Confirmvisit',{name:name,clinic:clinicname,time:time,duration:duration});
//Alert.alert(name);
}
  
  onicontl()
  {
    
    Alert.alert('See the list of all doctors available on your desired date and time of visit nearby, Tap any doctors to see the details');
  }
  oniconbl()
  {
    this.props.navigation.navigate('UrgentScreen');
    //Alert.alert('Choose the desired date and time of your visit to doctor and tap the buttton to see available doctors');
  }

  onnotify()
  {
this.props.navigation.navigate('selectdr');
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
 onPress={() => this.card.flip()}
           >
            <Image
              source={require('./info.png')}
              style={styles.buttonIconTopRight}
            />
          </TouchableHighlight>

          
          <View style={[styles.innercontainer,{alignItems:'center',}]}>
          <Text> {''} </Text>
          <Text> {'' }</Text>
          
           <Text style={styles.paragraph}>
             Doctors Nearby       </Text>
          <Text> {''} </Text>
          <Text> {'' }</Text>
           <Text> {''} </Text>

          
          <FlatList style={{width:'100%', height:'50%'}}
          data={this.state.clinicdetails} 
          renderItem={({item,index}) =>
          <TouchableOpacity onPress={()=>{this.onURGENT(item.doctorname,item.clinicname,item.time,item.duration)} }>
          <View  style={{flexDirection:'row',flexWrap: 'wrap',alignSelf:'center'}}>
				<View style={{flexDirection:'column',alignItems:'left',flexWrap:'wrap',alignSelf:'left'}}>
									<Text style={{textAlign:'left', fontSize:20,color:'#000'}}>
									{item.doctorname} 
									</Text>
									<Text style={{textAlign:'left', fontSize:20,color:'#000'}}>
									{item.clinicname} {' '}
									</Text>
									 <Text> {''} </Text>
          <Text> {'' }</Text>
				</View>
        <View style={{flexDirection:'column',alignItems:'center',flexWrap:'wrap',alignSelf:'left'}}>
         <Text> {''} </Text>
          <Text> {'' }</Text>
          <Text> {''} </Text>
          <Text> {'' }</Text>
				</View>
				<View style={{flexDirection:'column',flexWrap:'wrap',alignItems:'right',aignSelf:'right'}}>
										<Text style={{textAlign:'right', fontSize:20,color:'#000'}}>
									{item.time}
									</Text>
									<Text style={{textAlign:'right', fontSize:20,color:'#000'}}> 
									{item.duration}
									</Text>
                   <Text> {''} </Text>
          <Text> {'' }</Text>
						</View>
						</View>		
           </TouchableOpacity>
           }
          
        />
           
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
            <Text
              style={{
                textAlign: 'center',
                fontSize: 25,
                color: '#000',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
			 See the list of all doctors available on your desired date and time of visit nearby, Tap any doctors to see the details     
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
