import React from "react";
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from "react-native";
import styles from "./styles"; // Assuming styles are in a separate file
import { useNavigation } from '@react-navigation/native';

const SavedPosts = ({ route }) => {
  const navigation = useNavigation();

  // Placeholder data for saved parking spots
  const savedSpots = [
    {
      id: '1',
      title: 'Downtown Parking',
      location: '123 Main St, Downtown',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: '2',
      title: 'Mall Parking',
      location: '456 Shopping Ave, Midtown',
      imageUrl: 'https://via.placeholder.com/150',
    },
    // Add more saved spots as needed
  ];

  // Function to render each parking spot
  const renderSavedSpot = (spot) => (
    <TouchableOpacity
      key={spot.id}
      style={styles.spotItem}
      onPress={() => navigation.navigate('SpotDetails', { spotId: spot.id })}
    >
      <Image source={{ uri: spot.imageUrl }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.spotTitle}>{spot.title}</Text>
        <Text style={styles.locationText}>{spot.location}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.sectionTitle}>Saved Parking Spots</Text>
      {savedSpots.map(spot => renderSavedSpot(spot))}
    </ScrollView>
  );
};

export default SavedPosts;