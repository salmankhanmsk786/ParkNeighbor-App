import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  sidebar: {
    width: 120,
    backgroundColor: '#f7f7f7',
    borderRightWidth: 1,
    borderRightColor: '#ddd',
  },
  chatContainer: {
    flex: 1,
  },
  userButton: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  selectedUserButton: {
    backgroundColor: '#e0e0e0',
  },
  userButtonText: {
    fontSize: 16,
  },
  messageContainer: {
    flex: 1,
    padding: 10,
  },
  messageBox: {
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    marginVertical: 5,
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
    fontSize: 16,
  },
  sendButton: {
    backgroundColor: '#007bff',
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});