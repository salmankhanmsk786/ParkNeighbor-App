import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';

import styles from './styles.js';

const CalendarScreen = () => {
  // Dummy data for parking reservations
  const [parkingSpots, setParkingSpots] = useState({
    '2024-03-20': {
      spots: [
        { id: '1', name: 'Parking Spot 1', status: 'active' },
        { id: '2', name: 'Parking Spot 2', status: 'active' },
      ],
    },
    '2024-03-21': {
      spots: [
        { id: '3', name: 'Parking Spot 3', status: 'upcoming' },
      ],
    },
    // Add more dates and spots as needed
  });

  // State to keep track of the selected day
  const [selectedDay, setSelectedDay] = useState();

  // Convert parking spots to markedDates for the calendar
  const markedDates = Object.keys(parkingSpots).reduce((acc, date) => {
    acc[date] = { marked: true };
    return acc;
  }, {});

  // Handler for day press
  const onDayPress = (day) => {
    setSelectedDay(day.dateString);
  };

  return (
    <ScrollView style={styles.container}>
      <Calendar
        onDayPress={onDayPress}
        markedDates={markedDates}
      />

      {/* Display parking spot information */}
      <View style={styles.detailsContainer}>
        {selectedDay && parkingSpots[selectedDay]?.spots.map((spot) => (
          <View key={spot.id} style={styles.spotDetails}>
            <Text style={styles.spotName}>{spot.name}</Text>
            <Text>Status: {spot.status}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default CalendarScreen;