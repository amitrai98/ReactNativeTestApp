import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as appActions from "./UserDetailActions";
type Props = {};

export class UserDetails extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View>
        <Text>hello this is new refresh</Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    UserDetailReducer: state.UserDetailReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    refreshUserDetail: bindActionCreators(
      appActions.refreshUserDetail,
      dispatch
    )
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDetails);
const styles = StyleSheet.create({
  container: {}
});
