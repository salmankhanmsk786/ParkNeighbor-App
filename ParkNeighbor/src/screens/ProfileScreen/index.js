import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import styles from "./styles"; // Assuming styles are in a separate file
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = ({ route }) => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileHeader}>
        <Image
          style={styles.profilePic}
          source={{ uri: 'https://via.placeholder.com/150' }}
        />
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.email}>johndoe@example.com</Text>

        {/* Additional Info */}
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>Location: New York, NY</Text>
          <Text style={styles.infoText}>Member since: January 2020</Text>
          <Text style={styles.infoText}>Total Parkings: 42</Text>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      {/* Other sections can go here */}
    </ScrollView>
  );
};

export default ProfileScreen;
