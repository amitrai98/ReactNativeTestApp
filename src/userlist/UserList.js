import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "./UserListActions";
import AppHeader from "../appheader";
import { FlatList } from "react-native-gesture-handler";
import UserListItem from "./userlistcomponents/UserListItem";

type Props = {};
export class UserList extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      userList: [
        { key: "1", value: "some data" },
        { key: "2", value: "some data" }
      ]
    };
  }
  render() {
    const { userList } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <AppHeader title={"User List"} />
        <View style={{ padding: 5, flex: 1 }}>
          <FlatList
            data={userList}
            renderItem={({ item, index }) => (
              <UserListItem item={item} index={index} />
            )}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { UserListReducer } = state;
  const { data, isFetching, failure, success, error } = UserListReducer;
  return {
    data,
    isFetching,
    failure,
    success,
    error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUserList: bindActionCreators(actions.getUserList, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);

const styles = StyleSheet.create({
  container: {}
});
