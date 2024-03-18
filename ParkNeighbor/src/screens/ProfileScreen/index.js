import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Image, Pressable } from "react-native";
import styles from "./styles"; // Assuming styles are in a separate file
import { useNavigation } from '@react-navigation/native';
import {
  withAuthenticator,
  useAuthenticator
} from '@aws-amplify/ui-react-native';
import { generateClient } from 'aws-amplify/api';




const ProfileScreen = ({ route }) => {
  const navigation = useNavigation();
  const userSelector = (context) => [context.user];
  
  const { user, signOut } = useAuthenticator(userSelector);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileHeader}>
        <Image
          style={styles.profilePic}
          source={{ uri: 'https://via.placeholder.com/150' }}
        />

        <Text style={styles.name}>{user.username}</Text>

        <Text style={styles.email}>{user.email}</Text>

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

      <Pressable onPress={signOut} style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>
          Sign Out
        </Text>
      </Pressable>

      {/* Other sections can go here */}
    </ScrollView>
  );
};

export default ProfileScreen;
