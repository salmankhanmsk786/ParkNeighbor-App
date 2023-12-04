import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  image: {
    width: windowWidth,
    height: windowHeight,
    resizeMode: 'cover', // or 'stretch' to fill the screen
    position: 'absolute',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'center', // Center horizontally
    position: 'absolute',
    top: '15%',
  },
  button: {
    backgroundColor: 'black',
    width: 250,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center', // Center horizontally
    position: 'absolute',
    top: '50%',

  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },

  searchButton: {
    backgroundColor: '#fff',
    width: windowWidth - 20,
    height: 60,
    flexDirection: 'row',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 30,
    zIndex: 100,
    marginHorizontal: 10,
    borderColor: 'black', // Add black border color
    borderWidth: 1,
  },

  searchButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  }
});

export default styles;