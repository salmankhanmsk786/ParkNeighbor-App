import React from 'react';
import { View, Text, ScrollView, Pressable } from "react-native";
import { useNavigation } from '@react-navigation/native';
import styles from "./styles";
import { CommonActions } from '@react-navigation/native';

const OrderCompleteScreen = (props) => {
  const navigation = useNavigation();

  const goToHome = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          { name: 'Home' }, // Adjust the name if your home route has a different name
        ],
      })
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Order Complete</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.confirmationMessage}>
          Thank you for your reservation.
        </Text>
        <Text style={styles.confirmationMessage}>
          Your parking spot has been successfully booked.
        </Text>

        {/* A button to navigate back to the home screen or other parts of the app */}
        <Pressable
          onPress={goToHome}
          style={styles.button}>
          <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold', alignSelf: 'center' }}>Home</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default OrderCompleteScreen;
