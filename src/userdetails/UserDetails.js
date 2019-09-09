import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as appActions from "./UserDetailActions";
import AppHeader from "../appheader";
import { containsKey } from "./UserDetailsHelper";
import { isEmptyField } from "../util/Utility";
type Props = {};

export class UserDetails extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // Name;
  // 2. Phone number
  // 3. Email
  // 4. Profile picture URL
  // 7. at_work

  render() {
    const { userDetail, showData } = this.props.navigation.state.params;
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <AppHeader
          title={"User Detail"}
          showBackButton={true}
          navigation={navigation}
        />
        <View style={{ margin: 20 }}>
          {containsKey(showData, "name") ? (
            <Text>
              {"Name :- " + userDetail.first_name + " " + userDetail.last_name}
            </Text>
          ) : null}

          {containsKey(showData, "phone") &&
          !isEmptyField(userDetail.phone.mobile_no) ? (
            <Text style={{ marginTop: 10 }}>
              {"Phone No. :- " + userDetail.phone.mobile_no}
            </Text>
          ) : null}

          {containsKey(showData, "email") && !isEmptyField(userDetail.email) ? (
            <Text style={{ marginTop: 10 }}>
              {"Email :- " + userDetail.email}
            </Text>
          ) : null}

          {containsKey(showData, "profilePic") &&
          !isEmptyField(userDetail.email) ? (
            <Text style={{ marginTop: 10 }}>
              {"Profile Url:-  " + userDetail.profile_img}
            </Text>
          ) : null}

          {containsKey(showData, "atwork") &&
          !isEmptyField(userDetail.email) ? (
            <Text style={{ marginTop: 10 }}>
              {"At Work "}
              {userDetail.at_work == 1 ? "Yes" : "No"}
            </Text>
          ) : null}
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
