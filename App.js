import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Image } from 'react-native';



 function App() {
  const [User, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <View style={styles.container}>

      <View style={styles.title}>
        <Text> Welcome to Name Tracker 3000 </Text>
      </View>
        <Text> Please login:</Text>
        <TextInput></TextInput>


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
    fontSize: 100,
  }
});


export default App;