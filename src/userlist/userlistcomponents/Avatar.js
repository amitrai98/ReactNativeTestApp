import React from "react";
import { Image, View } from "react-native";
import { green } from "ansi-colors";

const Avatar = props => {
  const { item } = props;
  return (
    <View
      style={{
        padding: 3
      }}
    >
      <Image
        style={{
          width: 60,
          height: 60,
          borderRadius: 30,
          padding: 5,
          borderColor: "green",
          borderWidth: 2
        }}
        source={{
          uri: "https://unsplash.it/400/400?image=1"
        }}
      />
    </View>
  );
};

export default Avatar;
