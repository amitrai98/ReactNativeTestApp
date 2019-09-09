import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import Avatar from "./Avatar";
import { isEmptyField, isEmpty } from "../../util/Utility";
import Images from "../../util/Images";
import { Linking } from "react-native";

const UserListItem = props => {
  const { item, openFilterPage } = props;
  let name = "";
  if (!isEmptyField(item.first_name)) name = item.first_name;
  if (!isEmptyField(item.last_name)) name = name + " " + item.last_name;
  return (
    <TouchableOpacity
      onPress={() => {
        openFilterPage(item);
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
        <View style={{ flex: 0.4 }}>
          <Avatar uri={item.profile_img} />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center"
          }}
        >
          <Text style={{ fontSize: 20, justifyContent: "flex-end" }}>
            {name}
          </Text>
          <Text style={{ fontSize: 16, justifyContent: "flex-start" }}>
            {item.profile_img}
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
            onPress={() => {
              !isEmpty(item.phone) && !isEmptyField(item.phone.mobile_no)
                ? Linking.openURL(`tel:${item.phone.mobile_no}`)
                : alert("Phone Number Not Available");
            }}
            style={{
              flex: 1,
              justifyContent: "center"
            }}
          >
            <Image
              style={{
                width: 30,
                height: 40,
                padding: 5,
                alignSelf: "center"
              }}
              resizeMode={"contain"}
              source={Images.phone}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              !isEmpty(item.phone) && !isEmptyField(item.phone.mobile_no)
                ? Linking.openURL(`sms:${item.phone.mobile_no}`)
                : alert("Phone Number Not Available");
            }}
            style={{ flex: 1, alignSelf: "center", justifyContent: "center" }}
          >
            <Image
              style={{
                width: 40,
                height: 40,
                padding: 5,
                alignSelf: "center"
              }}
              resizeMode={"contain"}
              source={Images.message}
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default UserListItem;
