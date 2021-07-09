import React, { useState, useEffect } from 'react';
import { View, Test, StyleSheet } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { RectButton } from 'react-native-gesture-handler';
import Names from './names.js'

function Swiper ({names, currentIndex}) {

  const renderLeftActions = () => {
    return(<RectButton style={styles.container}>
      <Names bname={names[currentIndex + 1]}/>
    </RectButton>)
  }

  const renderRightActions = () => {
    return(<RectButton style={styles.container}>
      <Names bname={names[currentIndex + 1]}/>
    </RectButton>)
  }

    return (
      <Swipeable
      friction={2}
      leftThreshold={50}
      rightThreshold={50}
      renderLeftActions={renderLeftActions}
      renderRightActions={renderRightActions}
      >
          <Names bname={names[currentIndex]}/>
      </Swipeable>
    )
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
export default Swiper