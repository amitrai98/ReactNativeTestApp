import React, { Component } from "react";
import { View, Text, Modal, FlatList, TouchableOpacity } from "react-native";
type Props = {};

export class UserDataFilter extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      userList: [],
      selectedFilters: [],
      filterOptions: [
        { key: "name" },
        { key: "phone" },
        { key: "email" },
        { key: "profilePic" },
        { key: "atwork" }
      ]
    };
  }

  pushItem(key) {
    const { selectedFilters } = this.state;
    let isPresent = false;
    selectedFilters.forEach(element => {
      if (element == key) isPresent = true;
    });
    if (!isPresent) {
      let data = Object.assign([], selectedFilters);
      data.push(key);
      this.setState({ selectedFilters: data });
    }
  }

  getListItem = item => {
    return (
      <TouchableOpacity
        onPress={() => {
          this.pushItem(item.key);
        }}
      >
        <View
          style={{
            width: 120,
            marginTop: 10,
            marginLeft: 10,
            backgroundColor: "#218cdd"
          }}
        >
          <Text style={{ alignSelf: "center", padding: 10, color: "white" }}>
            {item.key}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  rederSelectedItems = item => {
    return <Text style={{ alignSelf: "flex-start", padding: 5 }}>{item}</Text>;
  };

  render() {
    const { filterOptions, selectedFilters } = this.state;
    const { openUserDetailPage } = this.props;
    return (
      <Modal style={{ flex: 1 }}>
        <View style={{ margin: 10 }}>
          <View
            style={{
              borderWidth: 2,
              borderRadius: 20,
              borderColor: "gray",
              height: 100,
              width: "100%",
              padding: 10
            }}
          >
            <FlatList
              data={selectedFilters}
              horizontal={true}
              renderItem={({ item }) => this.rederSelectedItems(item)}
            />
          </View>

          <FlatList
            data={filterOptions}
            renderItem={({ item }) => this.getListItem(item)}
          />
          <TouchableOpacity
            onPress={() => {
              openUserDetailPage(selectedFilters);
            }}
            style={{ justifyContent: "center", marginTop: 50 }}
          >
            <Text
              style={{
                alignSelf: "center",
                backgroundColor: "green",
                paddingHorizontal: 30,
                paddingVertical: 10,
                borderRadius: 10,
                color: "white"
              }}
            >
              Apply
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  }
}

export default UserDataFilter;
