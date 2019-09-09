import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Avatar from "./Avatar";

const UserListItem = props => {
  const { item, ind } = props;
  return (
    <TouchableOpacity
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
        <View style={{ flex: 0.6 }}>
          <Avatar />
        </View>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text style={{ fontSize: 20, justifyContent: "flex-end" }}>
            {item.value}
          </Text>
          <Text style={{ fontSize: 16, justifyContent: "flex-start" }}>
            {item.value}
          </Text>
        </View>

        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text>{item.value}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default UserListItem;
