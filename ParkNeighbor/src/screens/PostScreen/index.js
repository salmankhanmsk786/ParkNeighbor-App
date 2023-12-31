import React from 'react';
import { View, Text, Pressable } from "react-native";
import DetailedPost from '../../components/DetailedPost';
import {useRoute} from '@react-navigation/native';

import places from '../../../assets/data/feed';

const post = places[0];

const PostScreen = (props) => {
  const route = useRoute();

  const post = places.find(place => place.id === route.params.postId);

  return (
    <View style={{backgroundColor: 'white'}}>
      <DetailedPost post={post} />
    </View>
  );
};

export default PostScreen;