import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Button } from 'react-native';
import axios from 'axios';


function Login ({setUser, setPassword, loginClick}) {
  return (
    <>
    <View style={styles.hblock}>
          <Text> Username: </Text>
        <TextInput
        style={styles.login}
        placeholder=" enter username"
        onChangeText={text =>setUser(text)}
        maxLength={50}

        ></TextInput>
        </View>

        <View style={styles.hblock}>
          <Text> Password: </Text>
        <TextInput
        style={styles.login}
        placeholder="  enter password"
        onChangeText={text =>setPassword(text)}
        maxLength={50}
        secureTextEntry={true}
        ></TextInput>
        </View>
        <Button

        title='Login'
        color='#00CCCC'
        onPress={loginClick}
        />
        </>
  )

}


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#BADBE4',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: .25,
    fontSize: 25,
  },
  hblock: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

  },
  login: {
    height: 25,
    borderWidth: 1,
    borderRadius: 15,
    marginBottom: 10,
  }
});


export default Login;