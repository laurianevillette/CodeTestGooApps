// Components/Item.js

import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.images = [];
  }
  _loadImage(object) {
    this.images = object.images;
  }
  render() {
    const object = this.props.object;
    this._loadImage(object);

    return (
      <View style={styles.main_container}>
        <Image style={styles.image} source={{ uri: this.images[0].b.url }} />
        <View style={styles.content_container}>
          <View style={styles.header_container}>
            <Text style={styles.title_text}>{object.title}</Text>
          </View>
          <View style={styles.description_container}>
            <Text style={styles.description_text} numberOfLines={5}>
              {object.description}
            </Text>
          </View>
          <View style={styles.date_container}>
            <Text style={styles.date_text}>
              Acquisition date: {object.year_acquired}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    flexDirection: "row"
  },
  image: {
    width: 120,
    height: 180,
    margin: 5,
    backgroundColor: "gray"
  },
  content_container: {
    flex: 1,
    margin: 5
  },
  header_container: {
    flex: 1
  },
  title_text: {
    fontWeight: "bold",
    fontSize: 20,
    flex: 1
  },

  description_container: {
    flex: 7
  },
  description_text: {
    fontStyle: "italic",
    color: "#666666"
  },
  date_container: {
    flex: 1
  },
  date_text: {
    textAlign: "right",
    fontSize: 14,
    color: "#666666",
    fontWeight: "bold"
  }
});

export default Item;
