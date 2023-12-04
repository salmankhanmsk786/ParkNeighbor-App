import React, { useState, useEffect, useRef } from "react";
import { View, FlatList, useWindowDimensions } from "react-native";
import MapView from 'react-native-maps';
import CustomMarker from "../../components/CustomMarker";
import PostCarouselItem from "../../components/PostCarouselItem";
import places from '../../../assets/data/feed';
import { debounce } from 'lodash';

const SearchResultsMaps = (props) => {
  const [selectedPlaceId, setSelectedPlaceId] = useState(null);
  const flatlist = useRef();
  const map = useRef();
  const viewConfig = useRef({ itemVisiblePercentThreshold: 70 });
  const width = useWindowDimensions().width;

  const updateSelectedPlaceId = debounce((id) => {
    setSelectedPlaceId(id);
  }, 200); // 200 ms debounce

  const onViewChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      const selectedPlace = viewableItems[0].item;
      updateSelectedPlaceId(selectedPlace.id);
    }
  });

  useEffect(() => {
    if (!selectedPlaceId || !flatlist.current || !map.current) {
      return;
    }

    const index = places.findIndex(place => place.id === selectedPlaceId);
    flatlist.current.scrollToIndex({ index });

    const selectedPlace = places[index];
    const region = {
      latitude: selectedPlace.coordinate.latitude,
      longitude: selectedPlace.coordinate.longitude,
      latitudeDelta: 0.02, // Closer zoom
      longitudeDelta: 0.02, // Closer zoom
    };

    map.current.animateToRegion(region);
  }, [selectedPlaceId]);

  return (
    <View style={{ width: '100%', height: '100%' }}>
      <MapView
        ref={map}
        style={{ width: '100%', height: '100%' }}
        provider={MapView.PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 34.052235, // Central latitude for initial region
          longitude: -118.243683, // Central longitude for initial region
          latitudeDelta: 0.02, // Initial zoom level
          longitudeDelta: 0.02, // Initial zoom level
        }}
      >
        {places.map(place => (
          <CustomMarker
            key={place.id} // Ensure each marker has a unique key
            coordinate={place.coordinate}
            price={place.newPrice}
            isSelected={place.id === selectedPlaceId}
            onPress={() => updateSelectedPlaceId(place.id)}
          />
        ))}
      </MapView>

      <View style={{ position: 'absolute', bottom: 10 }}>
        <FlatList
          ref={flatlist}
          data={places}
          renderItem={({ item }) => <PostCarouselItem post={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={width - 60}
          snapToAlignment={"center"}
          decelerationRate={"fast"}
          viewabilityConfig={viewConfig.current}
          onViewableItemsChanged={onViewChanged.current}
        />
      </View>
    </View>
  );
};

export default SearchResultsMaps;
