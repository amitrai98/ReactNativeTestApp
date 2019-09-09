import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as appActions from "./UserDetailActions";
import AppHeader from "../appheader";
type Props = {};

export class UserDetails extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { userDetail, data_tobeshown } = this.props.navigation.state.params;
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <AppHeader
          title={"User Detail"}
          showBackButton={true}
          navigation={navigation}
        />
        <View>
          <Text>hello this is new refresh</Text>
        </View>
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
