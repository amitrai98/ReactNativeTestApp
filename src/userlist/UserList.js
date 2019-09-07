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
        {
          key: "1",
          value: "some data",
          description: "some description for the first element"
        },
        { key: "2", value: "some data", description: "some description" }
      ]
    };
  }

  openDetailPage(item) {
    console.log("i was called");
    this.props.navigation.navigate("UserDetails", { item });
  }
  render() {
    const { userList } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <AppHeader title={"User List"} />
        <View style={{ padding: 5, flex: 1 }}>
          <FlatList
            data={userList}
            renderItem={({ item }) => (
              <UserListItem
                item={item}
                openDetailPage={item => this.openDetailPage(item)}
              />
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
