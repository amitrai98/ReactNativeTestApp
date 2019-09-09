import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import Avatar from "./Avatar";

const UserListItem = props => {
  const { item, openDetailPage } = props;
  return (
    <TouchableOpacity
      onPress={() => {
        openDetailPage(item);
      }}
      style={{
        borderColor: "gray",
        borderTopWidth: 1.2,
        borderBottomWidth: 1.2,
        borderLeftWidth: 1.5,
        borderRightWidth: 1.5,

        paddingVertical: 10,
        paddingHorizontal: 2,
        marginTop: 10
      }}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ flex: 0.5 }}>
          <Avatar />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center"
          }}
        >
          <Text style={{ fontSize: 20, justifyContent: "flex-end" }}>
            {item.value}
          </Text>
          <Text style={{ fontSize: 16, justifyContent: "flex-start" }}>
            {item.description}
          </Text>
        </View>

        <View
          style={{
            flex: 0.5,
            justifyContent: "space-around",
            flexDirection: "row"
          }}
        >
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: "center"
            }}
          >
            <Image
              style={{
                width: 25,
                height: 25,
                padding: 5,
                alignSelf: "center"
              }}
              source={{
                uri: "https://unsplash.it/400/400?image=1"
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={{ flex: 1, alignSelf: "center", justifyContent: "center" }}
          >
            <Image
              style={{
                width: 25,
                height: 25,
                padding: 5,
                alignSelf: "center"
              }}
              source={{
                uri: "https://unsplash.it/400/400?image=1"
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default UserListItem;
