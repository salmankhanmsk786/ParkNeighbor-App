import React from "react";
import { View, Text, Image, useWindowDimensions, Pressable } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const Post = (props) => {

  const post = props.post;
  const width = useWindowDimensions().width;

  const navigation = useNavigation();

  const goToPostPage = () => {
    navigation.navigate('Post', {postId: post.id});
  }

  return (
    <Pressable onPress={goToPostPage} style={[styles.container, { width: width - 60 }]}>
      <View style={styles.innerContainer}>
        {/* Image */}
        <Image
          style={styles.image}
          source={{ uri: post.image }}
        />
        <View style={{ flex: 1, marginHorizontal: 10 }}>
          <Text style={styles.parkingSpot}>
            {post.parkingSpot}
          </Text>

          <Text style={styles.description} numberOfLines={2}>
            {post.type}, {post.title}
          </Text>

          <Text style={styles.prices}>
            <Text style={styles.price}>${post.newPrice} </Text>
            / hour
          </Text>
        </View>
      </View>
    </Pressable>
  )
}

export default Post;

//Armen Abraamyan