import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "./UserListActions";
import AppHeader from "../appheader";
import { FlatList } from "react-native-gesture-handler";
import UserListItem from "./userlistcomponents/UserListItem";
import Loader from "../util/Loader";

type Props = {};
export class UserList extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      userList: []
    };
  }

  componentDidMount() {
    this.props.getUserList({ user_id: 588, loggedin_user_id: 588 });
  }

  componentDidUpdate(prevProps) {
    const { data, isFetching, failure, success, error } = this.props;
    if (prevProps.isFetching !== isFetching && !isFetching) {
      if (success) {
        console.log("data is " + data);
        this.setState({ userList: data.User });
      } else if (failure) {
        console.log("error is " + error);
      }
    }
  }

  render() {
    const { userList } = this.state;
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <AppHeader title={"User List"} />
        <Loader />
        <View style={{ padding: 5, flex: 1 }}>
          <FlatList
            data={userList}
            renderItem={({ item }) => (
              <UserListItem item={item} navigation={navigation} />
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
