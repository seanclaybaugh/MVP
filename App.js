import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Button } from 'react-native';
import axios from 'axios';
import Login from './components/login.js';
import Home from './components/home.js';




function App() {

  const [User, setUser] = useState('Sean');
  const [loggedIn, setLoggedIn] = useState(true);
  const [password, setPassword] = useState(null);


  function loginClick () {
    console.log('clicked')
    const body = {
      username: User,
      password: password
    }
    const login = async () => {

      const post = await axios.post(`http://localhost:3000/login`, body)
        if(post.data[0]) {
          setLoggedIn(true);
        } else {
          alert('Please enter a valid username and password')
        }
    }
    login();
  }

  return (

    <View style={styles.container}>


      {!loggedIn ?
      <>
      <View style={styles.title}>
        <Text style={styles.title}> Welcome to Nomen </Text>
      </View>
      <Login setUser={setUser} setPassword={setPassword} loginClick={loginClick}/> </>:
      <>
      <View style={styles.title}>
        <Text style={styles.title}> Nomen </Text>
      </View>
        <Home User={User} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        </>
      }





      <StatusBar style="auto" />
    </View>
  );
}




const styles = StyleSheet.create({
  cardcontainer: {
    display: 'flex',
    backgroundColor: 'blue',
    flex: 1,

  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#BADBE4',
    justifyContent: 'flex-start',
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: .15,
    fontSize: 40,
    color: 'white'
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


export default App;