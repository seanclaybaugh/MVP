import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Button, Dimensions, Animated } from 'react-native';
import axios from 'axios';
import Favorites from './favorites.js';
import Names from './names.js';
import Swiper from './swiper.js';


function Home({User, loggedIn, setLoggedIn}) {
  const [names, setNames] = useState([{babyname:'', id: 0, gender: ''}]);
  const [showFaves, setShowFaves] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  //fetch all names
  useEffect(() => {
    const getNames = async () => {
      const bnames = await axios.get(`http://localhost:3000/`)
      setNames(bnames.data);
    }
    getNames();
  }, []);


  return(<>

      <View style={styles.hblock}>
        <Text style={styles.menutext} onPress={()=>setShowFaves(!showFaves)}>My Favorites  |</Text>

        <Text style={styles.menutext}>Male Names  |</Text>

        <Text style={styles.menutext}> Female Names  |</Text>

        <Text style={styles.menutext}>All Names</Text>

      </View>
    {showFaves && <Favorites User={User} />}

    {!showFaves &&
    <View style={{ flex: 1 }}>
        <View style={{ height: 60 }} />
        <View style={{ flex: .5}}>
        {names.length > 1 && (<Swiper names={names} currentIndex={currentIndex}></Swiper>) }
        </View>
        <View style={{ height: 60 }} />
      </View>}

  </>)
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flex: .05,
    borderWidth: .25,
    borderRadius: 10,
    marginBottom: 20,
    borderColor: 'navy',

  },
  login: {
    height: 25,
    borderWidth: 1,
    borderRadius: 15,
    marginBottom: 10,
  },
  menutext: {
    display: 'flex',
    margin: '5px',
    fontSize: 14,
    color: 'navy',
  },
});

export default Home;



