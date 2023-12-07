// ReservationScreen.js
import React from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import styles from "./styles"; // Assuming styles are in a separate file
import { useNavigation } from '@react-navigation/native';

const ReservationScreen = ({ route }) => {
  const { post } = route.params;
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.reservationHeader}>
        <Text style={styles.headerText}>Reservation for: User</Text>
      </View>
      <View style={styles.reservationBody}>
        <Text style={styles.bodyText}>{post.type}</Text>
        <Text style={styles.bodyText}>Address: {post.address}</Text>
        <Text style={styles.bodyText}>Price per Hour: ${post.newPrice}</Text>
        <Text style={styles.bodyText}>Total Price: ${post.totalPrice}</Text>
        {/* Include any other necessary details here */}
        <Pressable
          onPress={() => navigation.navigate('Order Complete', { post: post})}
          style={styles.button}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Confirm Order</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default ReservationScreen;
