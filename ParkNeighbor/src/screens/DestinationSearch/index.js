import React, { useState } from "react";
import { View, TextInput, Text, FlatList, Pressable } from "react-native";
import styles from './styles.js';
import { useNavigation } from "@react-navigation/native";
import SuggestionRow from "./SuggestionRow.js";

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const DestinationSearchScreen = (props) => {

  const [inputText, setInputText] = useState('');

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Input component*/}

      <View style={{height: 500}}>
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
            types: '(cities)',
          }}
          suppressDefaultStyles
          renderRow={(item) => <SuggestionRow item={item} />}
        />
      </View>

      <TextInput
        style={styles.textInput}
        placeholder="Where are you going?"
        value={inputText}
        onChangeText={setInputText}
      />
    </View>
  )
}

export default DestinationSearchScreen;