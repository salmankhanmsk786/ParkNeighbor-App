import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles.js';

const GuestsScreen = (props) => {
  const [hasHour, setHasHour] = useState(false);
  const [needEvCharging, setNeedEvCharging] = useState(false);
  const [isInfantIncluded, setIsInfantIncluded] = useState(false);

  const navigation = useNavigation();

  const toggleOption = (option) => {
    switch (option) {
      case 'hour':
        setHasHour(!hasHour);
        break;
      case 'evCharging':
        setNeedEvCharging(!needEvCharging);
        break;
      case 'infant':
        setIsInfantIncluded(!isInfantIncluded);
        break;
      default:
        break;
    }
  };

    return (
      <View style={{ justifyContent: 'space-between', height: '100%' }}>
        <View>
          <View style={styles.row} >
            {/* Residental house option */}
            <Text style={{ fontWeight: 'bold' }}>Residental Houses</Text>
            <Pressable onPress={() => toggleOption('hour')} style={styles.checkbox}>
              {hasHour && <Icon name="check" size={20} color="#474747" />}
            </Pressable>
          </View>

          <View style={styles.row} >
            {/* Complex Building option */}
            <Text style={{ fontWeight: 'bold' }}>Complex Building</Text>
            <Pressable onPress={() => toggleOption('evCharging')} style={styles.checkbox}>
              {needEvCharging && <Icon name="check" size={20} color="#474747" />}
            </Pressable>
          </View>

          <View style={styles.row} >
            {/* Ev Charging option */}
            <Text style={{ fontWeight: 'bold' }}>EV Charging</Text>
            <Pressable onPress={() => toggleOption('infant')} style={styles.checkbox}>
              {isInfantIncluded && <Icon name="check" size={20} color="#474747" />}
            </Pressable>
          </View>

          {/* add more option here */}

      </View>

  <Pressable
    onPress={() => navigation.navigate('Home', {
      screen: 'Explore',
      params: {
        screen: 'SearchResults',
      },
    })
    }
    style={{
      marginBottom: 20,
      backgroundColor: '#0000FF',
      alignItems: 'center',
      justifyContent: 'center',
      height: 50,
      marginHorizontal: 20,
      borderRadius: 10,
    }}>
    <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>Search</Text>
  </Pressable>

    </View >
  )
}

export default GuestsScreen;