import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native'; // Notice Image is now imported
import styles from "./styles";
import { useNavigation } from '@react-navigation/native';

const PrevOrders = ({ route }) => {
  const navigation = useNavigation();

  // Placeholder data with images
  const currentOrders = [
    { id: 'c1', title: 'Current Order #123', date: 'Feb 19, 2024', status: 'In Progress', imageUrl: 'https://via.placeholder.com/150' },
    { id: 'c2', title: 'Current Order #124', date: 'Feb 20, 2024', status: 'In Progress', imageUrl: 'https://via.placeholder.com/150' },
  ];

  const previousOrders = [
    { id: 'p1', title: 'Previous Order #120', date: 'Feb 15, 2024', status: 'Complete', imageUrl: 'https://via.placeholder.com/150' },
    { id: 'p2', title: 'Previous Order #121', date: 'Feb 16, 2024', status: 'Complete', imageUrl: 'https://via.placeholder.com/150' },
  ];

  // Function to render each order, including images
  const renderOrderItem = (item) => (
    <View key={item.id} style={styles.orderItem}>
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <View style={styles.orderDetails}>
        <Text style={styles.orderTitle}>{item.title}</Text>
        <Text style={styles.orderDate}>{item.date}</Text>
        <Text style={styles.orderStatus}>{item.status}</Text>
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.sectionTitle}>Current Orders</Text>
      {currentOrders.map(renderOrderItem)}
      <Text style={styles.sectionTitle}>Previous Orders</Text>
      {previousOrders.map(renderOrderItem)}
    </ScrollView>
  );
};

export default PrevOrders;