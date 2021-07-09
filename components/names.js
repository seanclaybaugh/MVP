import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect, useRef} from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Button, Dimensions, Animated, PanResponder } from 'react-native';
import axios from 'axios';



const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

function Names ({bname}) {

return (
    <View style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'grey',
      width: SCREEN_WIDTH,
      height: (SCREEN_HEIGHT * .33),
      borderRadius: 20,
      borderWidth: 1,}}>
        {console.log(bname.babyname)}
      <Text
      style={{
        fontSize: 50,
        borderRadius: 20,
        backgroundColor: 'grey'}}>{bname.babyname} </Text>
    </View>

);
}


export default Names;







// const pan = useRef(new Animated.ValueXY()).current;

// const panResponder = useRef(
//   PanResponder.create({
//     onMoveShouldSetPanResponder: (event) => true,
//     onPanResponderGrant: () => {
//       pan.setOffset({
//         x: pan.x._value,
//         y: pan.y._value
//       });
//     },
//     onPanResponderMove: Animated.event(
//       [
//         null,
//         { dx: pan.x, dy: pan.y }
//       ]
//     ),
//     onPanResponderRelease: () => {
//       console.log(pan.x)
//       console.log(event)
//       if(pan.x._value > 90){
//         console.log('like')
//       }
//       if(pan.x._value < -90) {
//         console.log('dislike')
//       }
//     }
//   })
// ).current;


// return (
// <Animated.View
//       style={{position: 'absolute',
//         transform: [{ translateX: pan.x }, { translateY: pan.y }]
//       }}
//       {...panResponder.panHandlers}
//     >
//       <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'grey', width: SCREEN_WIDTH, height: (SCREEN_HEIGHT * .33), borderRadius: 20, borderWidth: 1}}>
//       <Text
//         style={{
//           fontSize: 50,
//           borderRadius: 20,
//           backgroundColor: 'grey',
//         }}> {babyname}</Text>
//         </View>
//         </Animated.View>