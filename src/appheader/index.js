import React from "react";
import HeaderStyle from "./HeaderStyle";
import { View, Text, StatusBar } from "react-native";

const AppHeader = props => {
  const { title, titleStyle } = props;
  return (
    <View style={HeaderStyle.parentContainer}>
      <StatusBar barStyle="light-content" />

      <View
        style={{ flexDirection: "row", marginBottom: 5, paddingHorizontal: 10 }}
      >
        <View style={{ flex: 0.5 }}></View>
        <View style={{ flex: 1 }}>
          <Text
            style={
              titleStyle != undefined
                ? titleStyle
                : HeaderStyle.titleDefaultStyle
            }
          >
            {title}
          </Text>
        </View>
        <View style={{ flex: 0.5 }}></View>
      </View>
    </View>
  );
};

export default AppHeader;
