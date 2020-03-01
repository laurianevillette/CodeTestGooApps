import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  ActivityIndicator,
  TouchableOpacity
} from "react-native";
import Item from "./Item";
import { getObjectwithText } from "../Helpers/CooperHewittAPI";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.searchText = "";
    this.state = { objects: [], isLoading: false };
  }

  _loadObjects() {
    if (this.searchText.length > 0) {
      this.setState({ isLoading: true });
      getObjectwithText(this.searchText).then(data => {
        this.setState({ objects: data, isLoading: false });
      });
    }
  }
  _searchTextInputChanged(text) {
    this.searchText = text;
  }
  _displayLoading() {
    if (this.state.isLoading) {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ alignItems: "center" }}>
          <TextInput
            style={styles.bar}
            placeholder="Enter some text..."
            onChangeText={text => this._searchTextInputChanged(text)}
            onSubmitEditing={() => this._loadObjects()}
          />
          <TouchableOpacity
            style={styles.buttonClick}
            onPress={() => this._loadObjects()}
          >
            <Text style={styles.textButton}>Search</Text>
          </TouchableOpacity>
        </View>
        {this._displayLoading()}
        <FlatList
          data={this.state.objects}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => <Item object={item} />}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25
  },
  bar: {
    marginBottom: 5
  },
  buttonClick: {
    backgroundColor: "purple",
    alignContent: "center",
    justifyContent: "center",
    height: 50,
    width: 100,
    borderRadius: 20,
    alignItems: "center"
  },
  textButton: {
    fontSize: 20,
    color: "white"
  },
  loading_container: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Search;
