import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Button, Dimensions, Animated } from 'react-native';
import axios from 'axios';
import Favorites from './favorites.js';

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

function Names ({babyname, gender, id}) {


  return (
<Animated.View
        style={
          {
            height: SCREEN_HEIGHT * .33,
            width: SCREEN_WIDTH,
            padding: 10,
            position: 'absolute',
            backgroundColor: 'red'
          }
        }
      >
        <Text
          style={{
            flex: 1,
            height: 60,
            width: SCREEN_WIDTH - 20,
            fontSize: 25,
            resizeMode: "cover",
            borderRadius: 20,
            backgroundColor: 'grey'
          }}> {babyname}</Text>
          </Animated.View>




 );
}
export default Names;
