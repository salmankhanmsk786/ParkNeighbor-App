import React, { useState, useEffect, useContext } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image, Pressable, Switch, Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from "./styles";
import { useNavigation } from '@react-navigation/native';
import { useUserMode } from '../../navigation/UserModeContext';

const ProfileScreen = ({ route }) => {
  const navigation = useNavigation();
  const { isHostMode, setIsHostMode } = useUserMode();

  // Define your functions here
  const handleEditProfile = () => {
    // Example function body - replace with your actual navigation or action
    console.log('Edit Profile pressed');
    // navigation.navigate('EditProfileScreen'); // Uncomment and use the actual screen name
  };

  const handleAccountInfo = () => {
    // Example function body
    console.log('Account Information pressed');
    // navigation.navigate('AccountInfoScreen'); // Uncomment and use the actual screen name
  };

  const handleEmailVerification = () => {
    // Example function body
    console.log('Email Verification pressed');
    // navigation.navigate('EmailVerificationScreen'); // Uncomment and use the actual screen name
  };

  const toggleMode = async () => {
    await AsyncStorage.setItem('userMode', !isHostMode ? 'host' : 'guest');
    setIsHostMode(!isHostMode);
    // Refresh the profile or perform any additional actions required after toggling the mode
  };

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

        <TouchableOpacity style={styles.button} onPress={handleEditProfile}>
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      {/* Profile Settings */}
      <View style={styles.settingsContainer}>
        <Pressable style={styles.settingsOption} onPress={() => navigation.navigate('Payment Info')}>
          <Text style={styles.settingsText}>Payment Settings</Text>
        </Pressable>
        <TouchableOpacity style={styles.settingsOption} onPress={handleAccountInfo}>
          <Text style={styles.settingsText}>Account Information</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingsOption} onPress={handleEmailVerification}>
          <Text style={styles.settingsText}>Email Verification</Text>
        </TouchableOpacity>
        {/* Add more options as needed */}
      </View>

      {/* Other sections can go here */}

      {/* Mode Switch */}
      <Text>{isHostMode ? 'Host Mode' : 'Guest Mode'}</Text>
      <Switch
        onValueChange={toggleMode}
        value={isHostMode}
      />
      {/* Add more options as needed */}
    </ScrollView>
  );
};

export default ProfileScreen;
