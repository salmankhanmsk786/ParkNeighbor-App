import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import styles from './styles.js';

const DashboardScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>My Parking Reservations</Text>
        <View style={styles.reservationList}>
          <Text style={styles.subTitle}>Upcoming</Text>
          {/* Render upcoming reservations here */}
          <Text style={styles.reservationItem}>Reservation at Location A on Date X</Text>
          <Text style={styles.reservationItem}>Reservation at Location B on Date Y</Text>
          {/* ... */}
        </View>
        <View style={styles.reservationList}>
          <Text style={styles.subTitle}>Currently In Use</Text>
          {/* Render current reservations here */}
          <Text style={styles.reservationItem}>Spot at Location C - Started on Date Z</Text>
          {/* ... */}
        </View>
      </View>
      {/* Additional sections or information can be added here */}
    </ScrollView>
  );
};

export default DashboardScreen;