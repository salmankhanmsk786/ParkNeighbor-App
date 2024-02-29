import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff', // Setting a white background for the entire view
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600', // Semi-bold for better readability
    color: '#333333', // Dark gray for the text for better contrast
    padding: 20, // Add padding to give some room around the title
    backgroundColor: '#f7f7f7', // Light gray background for the section title
    borderBottomWidth: 2,
    borderBottomColor: '#e1e1e1', // Light line to separate title from content
  },
  spotItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff', // White background for each item
    borderRadius: 8, // Rounded corners for the cards
    margin: 10, // Margin around each card
    shadowColor: '#000', // Shadow to make the cards "pop" a bit
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5, // Elevation for Android shadow
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8, // Rounded corners for images
    margin: 10, // Margin around the image
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center', // Center the text vertically
  },
  spotTitle: {
    fontSize: 18,
    fontWeight: '500', // Medium boldness for title
    marginBottom: 5, // Space between title and location
  },
  locationText: {
    fontSize: 14,
    color: '#666666', // Lighter text for location
  },
});