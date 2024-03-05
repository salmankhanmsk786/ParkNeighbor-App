import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  profileHeader: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#dedede',
  },
  profilePic: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginTop: 40,
    marginBottom: 10,
    backgroundColor: '#cccccc',
  },
  name: {
    fontSize: 26,
    fontWeight: '600',
    color: '#333',
  },
  email: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  infoContainer: {
    marginBottom: 20,
  },
  infoText: {
    fontSize: 16,
    color: '#666',
    marginVertical: 2, // Small vertical margin for each info text
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
    shadowColor: '#4CAF50',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 6,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
  },
});
