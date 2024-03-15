import React from 'react'
import { View, ImageBackground, Text, Pressable } from 'react-native';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { useNavigation } from '@react-navigation/native';


const HomeScreen = (props) => {
  const navigation = useNavigation();

  return (
    <View>
      <ImageBackground
        source={require('../../../assets/images/wallpaper.jpg')}
        style={styles.image}>

        <Pressable
          style={styles.searchButton}
          onPress={() => navigation.navigate('Destination Search')}>
          <Fontisto name="search" size={25} color={'blue'} />
          <Text style={styles.searchButtonText}>Where are you going?</Text>
        </Pressable>

        <Text style={styles.title}>ParkNeighbor</Text>

        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('SearchResults')}>
          <Text style={styles.buttonText}>Explore Nearby Parking</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;

