import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    margin: 20,

  },

  image: {
    width: '100%',
    aspectRatio: 3 / 2,
    resizeMode: 'cover',
    borderRadius: 10,

  },

  parkingSpot: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333', // Darker color for better contrast
    marginTop: 10,
    marginBottom: 5, // Reduced space after the title
  },

  address: {
    fontSize: 14,
    color: '#777', // Lighter color for less emphasis
    marginBottom: 10, // Space before the detailed description
  },

  description: {
    fontSize: 16, // Slightly smaller font for body text
    lineHeight: 22, // Tighter line spacing for a cleaner look
    color: '#444', // Dark grey for readability
    marginBottom: 10, // Space before the price
  },

  prices: {
    fontSize: 18,
    fontWeight: 'bold', // Only the price will be bold
    color: '#000', // Black for importance and readability
    marginBottom: 5, // Space before the total price
  },

  totalPrice: {
    fontSize: 16, // Consistent with other body text
    color: '#5b5b5b', // Grey color for a subtle look
    textDecorationLine: 'none', // Remove underline for a cleaner look
    marginBottom: 20, // Space before the long description
  },

  longDescription: {
    fontSize: 14, // Smaller font for detailed text
    lineHeight: 20, // Tighter line spacing
    color: '#666', // Medium grey for readability
    marginBottom: 20, // Space before the reserve button
  },

  button: {
    backgroundColor: 'blue', // Use a more standard blue color
    paddingVertical: 15, // Increase padding for a larger button
    paddingHorizontal: 25, // Horizontal padding for wider button look
    borderRadius: 8, // Rounded corners for a modern look
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;

//Armen Abraamyan