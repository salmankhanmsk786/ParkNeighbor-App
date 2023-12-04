import React, { useState } from "react";
import { View, TextInput, Text, FlatList, Pressable } from "react-native";
import styles from './styles.js';
import { useNavigation } from "@react-navigation/native";
import SuggestionRow from "./SuggestionRow.js";

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const DestinationSearchScreen = (props) => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Input component*/}
      <GooglePlacesAutocomplete
        placeholder='Where are you going?'
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
          navigation.navigate('Guests');
        }}
        fetchDetails
        styles={{
          textInput: styles.textInput,
        }}
        query={{
          key: 'AIzaSyBxsM19-JeKP0ZmDsXAkmFXB_AW0NIOTFs',
          language: 'en',
          types: 'establishment',
        }}
        suppressDefaultStyles
        renderRow={(item) => <SuggestionRow item={item} />}
      />
    </View>
  )
}

export default DestinationSearchScreen;