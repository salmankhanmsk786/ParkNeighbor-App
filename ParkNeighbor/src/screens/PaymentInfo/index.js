import React from "react";
import { View, Text, ScrollView, TouchableOpacity, FlatList } from "react-native";
import styles from "./styles";
import { useNavigation } from '@react-navigation/native';

const PaymentInfoScreen = ({ route }) => {
  const navigation = useNavigation();

  const options = [
    { key: 'paymentMethods', label: 'Payment Methods' },
    { key: 'payoutMethods', label: 'Payout Methods' },
    { key: 'yourPayments', label: 'Your Payments' },
    { key: 'transactionHistory', label: 'Transaction History' },
  ];

  // Function to navigate back
  const handleGoBack = () => {
    navigation.goBack();
  };

  // Function to handle option selection
  const handleOptionSelect = (key) => {
    // Example: navigation.navigate(key);
    console.log(`Selected option: ${key}`);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
      </View>
      
      <Text style={styles.title}>Payment Options</Text>
      
      {options.map((option) => (
        <TouchableOpacity
          key={option.key}
          onPress={() => handleOptionSelect(option.key)}
          style={styles.optionContainer}
        >
          <Text style={styles.optionText}>{option.label}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default PaymentInfoScreen;
