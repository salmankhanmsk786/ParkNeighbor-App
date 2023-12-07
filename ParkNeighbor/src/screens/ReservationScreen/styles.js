// ReservationScreenStyles.js
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white", // Replace with your app's background color
  },
  reservationHeader: {
    padding: 20,
    backgroundColor: "#f0f0f0", // Replace with your app's header background color
    borderBottomWidth: 1,
    borderBottomColor: "#dedede", // Replace with your app's border color
  },
  headerText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333", // Replace with your app's text color
  },
  reservationBody: {
    padding: 20,
  },
  bodyText: {
    fontSize: 18,
    marginBottom: 10,
    color: "#333", // Replace with your app's text color
  },
  button: {
    marginBottom: 20,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    marginHorizontal: 20,
    borderRadius: 10,
  },
});

export default styles;
