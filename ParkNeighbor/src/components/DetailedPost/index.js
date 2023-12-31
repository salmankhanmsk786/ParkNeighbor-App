import React from "react";
import { View, Text, Image, ScrollView, Pressable } from "react-native";
import styles from "./styles";
import { useNavigation } from '@react-navigation/native';

const Post = (props) => {

  const post = props.post;
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.container}>
        {/* Image */}
        <Image
          style={styles.image}
          source={{ uri: post.image }} />
        {/* Parking Spot*/}
        <Text style={styles.parkingSpot}>{post.parkingSpot}</Text>

        <Text style={styles.address}>{post.address}</Text>
        {/* Type & Description */}
        <Text style={styles.description} numberOfLines={3}>
          {post.type}, {post.title}
        </Text>
        {/* Old price & new price */}
        <Text style={styles.prices}>
          <Text style={styles.price}>${post.newPrice} </Text>
          / hour
        </Text>
        {/* Total price */}
        <Text style={styles.totalPrice}>${post.totalPrice} total</Text>

        <Text style={styles.longDescription}>
          {post.description}
        </Text>
        <Pressable
          onPress={() => navigation.navigate('Reservation', { post: post})}
          style={styles.button}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Reserve Parking Spot</Text>
        </Pressable>
      </View>
    </ScrollView>
  )
}

export default Post;

//Armen Abraamyan