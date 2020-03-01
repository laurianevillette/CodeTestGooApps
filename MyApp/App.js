import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Search from "./components/Search.js";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.presentation}>
          <Text style={styles.header}>Welcome! </Text>
          <Text style={styles.explication}>
            In this App you can search some objects in Cooper Hewitt
            collections. You just have to enter a term corresponding to any
            characteristic of the object sought. (Like, for exemple Japan,
            plastic etc...)
          </Text>
        </View>

        <View style={{ flex: 5 }}>
          <Search />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  presentation: {
    alignItems: "center",
    flex: 1
  },
  header: {
    marginTop: 25,
    fontWeight: "bold",
    fontSize: 20,
    color: "purple"
  },
  explication: { margin: 5, fontStyle: "italic", color: "#666666" }
});
