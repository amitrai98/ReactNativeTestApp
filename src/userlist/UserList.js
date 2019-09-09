import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "./UserListActions";
import AppHeader from "../appheader";
import { FlatList } from "react-native-gesture-handler";
import UserListItem from "./userlistcomponents/UserListItem";
import Loader from "../util/Loader";
import UserDataFilter from "./userlistcomponents/UserDataFilter";

type Props = {};
export class UserList extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      userList: [],
      showPicker: false,
      selectedItem: {},
      dataToBeShown: ["name", "phone", "email", "profilePic", "atwork"],
      filterOptions: [
        { key: "name" },
        { key: "phone" },
        { key: "email" },
        { key: "profilePic" },
        { key: "atwork" }
      ]
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

  openFilterPage(item) {
    this.setState({ showPicker: true, selectedItem: item });
  }

  openUserDetailPage(showData) {
    this.setState({ showPicker: false }, () => {
      this.props.navigation.navigate("UserDetails", {
        userDetail: this.state.selectedItem,
        showData: showData
      });
    });
  }

  render() {
    const { userList, filterOptions, showPicker } = this.state;
    const { isFetching } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <AppHeader title={"User List"} />
        {showPicker ? (
          <UserDataFilter
            filterOptions={filterOptions}
            openUserDetailPage={showData => this.openUserDetailPage(showData)}
          />
        ) : null}

        <Loader loading={isFetching} />
        <View style={{ padding: 5, flex: 1 }}>
          <FlatList
            data={userList}
            renderItem={({ item }) => (
              <UserListItem
                item={item}
                openFilterPage={() => this.openFilterPage(item)}
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
