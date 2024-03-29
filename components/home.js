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
  const [ males, setMales] = useState({babyname: '', id: 0, gender: ''})
  const [ females, setFemales] = useState({babyname: '', id: 0, gender: ''})
  const [ display, setDisplay ] = useState('ALL');
  //fetch all names
  useEffect(() => {
    const getNames = async () => {
      const bnames = await axios.get(`http://localhost:3000/`)
      setNames(bnames.data);

      const FEM = bnames.data.filter((val) =>{
        if(val.gender === 'FEMALE'){
          return val;
        }
        return;
      })
      setFemales(FEM);
      const MALE = bnames.data.filter((val) =>{
        if(val.gender === 'MALE'){
          return val;
        }
        return;
      })
      setMales(MALE);
    }
    getNames();
  }, []);

    function handleLike () {
      console.log('like', names[currentIndex])

      const sendLike = async () => {
        const body = names[currentIndex]
        body.username = User;
      const send = await axios.post(`http://localhost:3000/name`, body)
      console.log(send)
      }
      sendLike()
      nextName()
    }
    function handleDislike () {
      console.log('dislike')
      nextName()
    }
    function nextName() {
      const nextIndex = names.length - 2 === currentIndex ? 0: currentIndex +1
      setCurrentIndex(nextIndex)
    }

  return(<>

      <View style={styles.hblock}>
        <Text style={styles.menutext} onPress={()=>setShowFaves(!showFaves)}>My Favorites  |</Text>

        <Text style={styles.menutext} onClick={()=> {
          setDisplay('MALE')
          setShowFaves(false)
        }
          }>Male Names  |</Text>

        <Text style={styles.menutext} onClick={()=> {
          setDisplay('FEMALE')
          setShowFaves(false)
        }
      }> Female Names  |</Text>

        <Text style={styles.menutext} onClick={()=> {
          setDisplay('ALL')
          setShowFaves(false)
          }}>All Names</Text>

      </View>
    {showFaves && <Favorites User={User} />}

    {!showFaves &&
    <View style={{ flex: 1 }}>
        <View style={{ height: 60 }} />
        <View style={{ flex: .5}}>

        {(names.length > 1 && display === 'ALL') && names.map((n, i)=> currentIndex === i && <Swiper key={i} names={names} currentIndex={currentIndex} handleLike={handleLike} handleDislike={handleDislike}></Swiper>) }

        {(names.length > 1 && display === 'MALE') && males.map((n, i)=> currentIndex === i && <Swiper key={i} names={males} currentIndex={currentIndex} handleLike={handleLike} handleDislike={handleDislike}></Swiper>) }

        {(names.length > 1 && display === 'FEMALE') && females.map((n, i)=> currentIndex === i && <Swiper key={i} names={females} currentIndex={currentIndex} handleLike={handleLike} handleDislike={handleDislike}></Swiper>) }

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



