import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    padding: 20,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  content: {
    padding: 20,
    alignItems: "center", // Center the content
  },
  confirmationMessage: {
    fontSize: 18,
    textAlign: "center",
    marginVertical: 10, // Space out the messages vertically
  },
  button: {
    backgroundColor: '#0000FF', // Use a hex color code for blue
    padding: 15, // Increase padding for better touch area
    marginTop: 20, // Space from the text above
    borderRadius: 5, // Rounded corners
    width: '30%', // This will set the button width to 80% of its parent View
    align: 'center', // This will center the button in the parent View
  },
});

export default styles;