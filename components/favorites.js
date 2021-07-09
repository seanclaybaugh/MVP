import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Button } from 'react-native';
import axios from 'axios';

function Favorites ({User}) {

  const [favorites, setFavorites] = useState([]);




  useEffect(() =>{
  const getFaves = async () => {

    const faves = await axios.get(`http://localhost:3000/${User}`)
    console.log(faves.data);
    setFavorites(faves.data);
  }
  getFaves();
  }, []);

  return (
  <>
    <View stlye={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <Text style={styles.favetitle} >{`${User}'s Favorite Names`}</Text>

    {favorites.map(({babyname, gender}) => {
      return <Text style={styles.favename} key={babyname} >{`${babyname}`}</Text>
    })}
    </View>

  </>
  )

}


const styles = StyleSheet.create({
  favetitle: {
    fontSize: 20,
  },
  favename: {
    fontSize: 15,
    margin: '5px',
  }

})

export default Favorites;

