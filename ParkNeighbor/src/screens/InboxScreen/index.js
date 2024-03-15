import React from "react";
import { View, Text, ScrollView, TextInput, TouchableOpacity, FlatList } from "react-native";
import styles from "./styles";
import { useNavigation } from '@react-navigation/native';

const InboxScreen = ({ route }) => {

  const [messageText, setMessageText] = React.useState('');
  const [selectedUser, setSelectedUser] = React.useState(null);

  // Placeholder data for chat users
  const chatUsers = [
    { id: '1', name: 'Alice' },
    { id: '2', name: 'Bob' },
    { id: '3', name: 'Charlie' },
    // ...add more users as needed
  ];

  const sendMessage = () => {
    alert("Message functionality not yet implemented.");
    setMessageText('');
  };

  const selectUser = (user) => {
    setSelectedUser(user);
  };

  return (
    <View style={styles.container}>
      <View style={styles.sidebar}>
        <FlatList
          data={chatUsers}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.userButton,
                item.id === selectedUser?.id && styles.selectedUserButton
              ]}
              onPress={() => selectUser(item)}
            >
              <Text style={styles.userButtonText}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={styles.chatContainer}>
        <ScrollView style={styles.messageContainer}>
          {/* Placeholder messages */}
          <View style={styles.messageBox}>
            <Text style={styles.messageText}>Welcome to the chat!</Text>
          </View>
          {/* You would map over real messages here */}
        </ScrollView>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Type a message..."
            value={messageText}
            onChangeText={setMessageText}
            returnKeyType="send"
            onSubmitEditing={sendMessage}
          />
          <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
            <Text style={styles.sendButtonText}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default InboxScreen;

// Make sure you have the following styles defined in your styles.js
