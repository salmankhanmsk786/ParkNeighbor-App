import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

import styles from './styles.js';

const ListingScreen = ({ navigation }) => {
  // Dummy data for parking spots
  const listingsData = [
    {
      id: '1',
      title: 'Downtown Parking Spot',
      description: 'Close to central shopping area. Covered spot.',
    },
    {
      id: '2',
      title: 'Stadium Parking',
      description: 'Perfect for event days. Secure and patrolled area.',
    },
    // ... more listings
  ];

  // Render each listing as a component
  const renderListingItem = ({ item }) => (
    <View style={styles.listingItem}>
      <Text style={styles.listingTitle}>{item.title}</Text>
      <Text>{item.description}</Text>
    </View>
  );

  // Navigate to the screen for creating a new listing
  const navigateToCreateNewListing = () => {
    navigation.navigate('CreateListing');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={listingsData}
        renderItem={renderListingItem}
        keyExtractor={(item) => item.id}
      />
      <Button
        title="Create New Listing"
        onPress={navigateToCreateNewListing}
        color="#1e90ff"
      />
    </View>
  );
};

export default ListingScreen;