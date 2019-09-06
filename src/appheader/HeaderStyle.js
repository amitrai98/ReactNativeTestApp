import { StyleSheet } from "react-native";

const HeaderStyle = StyleSheet.create({
  parentContainer: {
    backgroundColor: "green",
    height: "10%",
    justifyContent: "flex-end"
  },

  titleDefaultStyle: {
    color: "white",
    alignSelf: "center",
    paddingVertical: 5,
    fontSize: 18
  }
});

export default HeaderStyle;
