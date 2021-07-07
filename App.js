import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Image } from 'react-native';



 function App() {
  const [User, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [password, setPassword] = useState(null);
  return (
    <View style={styles.container}>

      <View style={styles.title}>
        <Text style={styles.title}> Welcome to Nomen </Text>
      </View>
        <View style={styles.hblock}>
          <Text> Username: </Text>
        <TextInput
        style={styles.login}
        placeholder="  enter username"
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

      <StatusBar style="auto" />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    color: 'white',
    flex: 1,
    backgroundColor: 'grey',
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
    marginBottom: 4,
  }
});


export default App;