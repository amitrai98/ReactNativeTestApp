import React from "react";
import { Image, View } from "react-native";
import { green } from "ansi-colors";
import { isEmptyField } from "../../util/Utility";
import Images from "../../util/Images";

const Avatar = props => {
  const { uri } = props;
  return (
    <View
      style={{
        padding: 3
      }}
    >
      {!isEmptyField(uri) ? (
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
            uri: uri
          }}
        />
      ) : (
        <Image
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            padding: 5,
            borderColor: "green",
            borderWidth: 2
          }}
          source={Images.profileImage}
        />
      )}
    </View>
  );
};

export default Avatar;
