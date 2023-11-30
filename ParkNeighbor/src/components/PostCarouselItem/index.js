import React from "react";
import { View, Text, Image, useWindowDimensions } from "react-native";
import styles from "./styles";

const Post = (props) => {

  const post = props.post;
  const width = useWindowDimensions().width;

  return (
    <View style={[styles.container, { width: width - 60 }]}>
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
            <Text style={styles.price}>  ${post.newPrice} </Text>
            / hour + fees
          </Text>
        </View>
      </View>
    </View>
  )
}

export default Post;

//Armen Abraamyan