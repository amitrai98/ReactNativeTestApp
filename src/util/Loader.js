import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Modal,
  ActivityIndicator,
  Image
} from "react-native";

const Loader = props => {
  const { loading } = props;
  if (loading)
    return (
      <View style={styles.modalBackground}>
        {/* {!this.state.changeImageOnComplete ? ( */}
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator animating={loading} size="large" />
        </View>
      </View>
    );
  else return null;
};

const styles = StyleSheet.create({
  modalBackground: {
    zIndex: 100000,
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: "rgba(0,0,0,0.5)"
  },
  activityIndicatorWrapper: {
    backgroundColor: "white",
    height: 100,
    width: 100,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around"
  }
});

export default Loader;
