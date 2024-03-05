import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 10,
  },
  orderItem: {
    flexDirection: 'row',
    alignItems: 'flex-start', // Align items to the start of the cross axis
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#cccccc',
    marginRight: 10,
  },
  orderDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  orderTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4, // Space between title and date
  },
  orderDate: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4, // Space between date and status
  },
  orderStatus: {
    fontSize: 14,
    color: '#666',
  },
});