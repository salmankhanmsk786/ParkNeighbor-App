import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 500,
        resizeMode: 'cover',
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',
        width: '70%',
        marginLeft: 70,
        marginTop: 100,
    },
    button: {
        backgroundColor: 'black',
        width: 250,
        height: 50,
        borderRadius: 10,
        marginTop: 280,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 50,

    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },

    searchButton: {
        backgroundColor: '#fff',
        width: Dimensions.get('screen').width - 20,
        height: 60,
        flexDirection: 'row',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 30,
        zIndex: 100,
        marginHorizontal: 10,


    },
    searchButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
    }
    

});

export default styles;