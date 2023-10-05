import React from 'react'
import { View, ImageBackground, Text, Pressable } from 'react-native'
import styles from './styles'
import Fontisto from 'react-native-vector-icons/Fontisto';


const HomeScreen = (props) => {
  return (


    <View>
        {/* backimage */}
        <ImageBackground source={require('../../../assets//images/wallpaper.jpg')} style={styles.image}>    
        {/* searchButton */}
        <Pressable style={styles.searchButton} onPress={() => console.warn('Search Btn clicked')}>
            <Fontisto name="search" size={25} color={'#f15454'} />
            <Text style={styles.searchButtonText}>Where are you going?</Text>
        </Pressable>
        
        {/* title */}
        <Text style={styles.title}> ParkNeighbor</Text>
        
        {/* Exploe button */}
        <Pressable style={styles.button} onPress={() => console.warn('Explore Btn clicked')}>
            <Text style={styles.buttonText}>Explore Nearby Parking</Text>
        </Pressable>
        
        </ImageBackground>
    </View>
  )
}

export default HomeScreen
