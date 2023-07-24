import { useState } from 'react';
import {StyleSheet, Text, View} from 'react-native'
import { Button, TextInput } from 'react-native-web';


export default function App(){

  const [userName,SetUserName] = useState('');
  const [userPass,SetUserPass] = useState('');
  const [userClick,SetUserClick] = useState('');

  return(
          <View style={styles.v}>        
              <statusbar style={{textAlign:'center'}}>Welcome to FalvorFusion</statusbar> 
              <view>
                  <Text style={styles.hi}>Hi</Text>
              </view>
              <text style={styles.hel}>Hello</text>

              <TextInput value = {userName}
                  onChangeText = {(userName)=> SetUserName(userName)}
                  placeholder= {'userName'}
                  style = {styles.input}
                  />
                  <Text style={{color: 'blue'}}>{userName}</Text>

                  <TextInput value = {userPass}
                  onChangeText = {(userPass)=> SetUserPass(userPass)}
                  placeholder= {'userPasswoard'}
                  style = {styles.input1}
                  />
                  <Text style={{color: 'blue'}}>{userPass}</Text>

                  <Button
                  title = {'Login'}
                  onPress ={(userClick) => SetUserClick(userClick) }
                  style = {styles.button}
                  />
                 
          </View>  
  );
}

const styles = StyleSheet.create({
  hi:{
               textAlign:'right'

  },
  hel:{
                textAlign:'left'
  },
  v:{
                flex:1,
                textAlign:'right',
                padding:20
    },
    input: {
      width: 250,
      height: 44,
      padding: 10,
      marginTop: 20, marginBottom: 10, backgroundColor: '#e8e8e8'
      },
      input1: {
        width: 250,
        height: 50,
        padding: 10,
        marginTop: 20, marginBottom: 10, backgroundColor: '#e8e8e8'
        },
        button:{
          width: 250,
          height: 100,
        }
       


});










//   container:
//                     flex: 1, 
//                     backgroundColor: '#fff',
//                     // alignContent: 'center',
//                     justifyContent: 'center',
//                     backgroundColor: '#00FFFF',
//                     borderColor: 'black',
//                     borderStyle:'dotted',
//                     // textAlign: 'center',
//                     paddingTop : '20px',

                    
//              ,
//     box:
//                   width:150,
//                   height:150, 
//                   borderWidth: 1,
//                   textAlign: 'left',
//                   borderColor: 'black',
//                   backgroundColor: 'red',
//                   borderRadius: 4,           
//     ,
//     ta:
//                   textAlign: 'center',
//                   alignContent: 'center'
                  
                  
//     
    
// 


