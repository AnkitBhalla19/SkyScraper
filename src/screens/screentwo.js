import React from "react";
import { Text, StyleSheet, View, Button, Image } from "react-native";

const Screentwo = ({ navigation }) => {
  return (
    <View>
      <Image
        style={styles.imagestyle}
        source={require("../../assets/parkingIcon.png")}
      />
      <View style={styles.space} />
      <View style={styles.button1}>
        <Button
          onPress={() => navigation.navigate("ownersign")}
          title="I want to Lend Parking"
        />
      </View>
      <View style={styles.space} />
      <View style={styles.button}>
        <Button
          onPress={() => navigation.navigate("usersign")}
          title="I want to Park"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  space: {
    width: 20,
    height: 10,
  },
  button1: {
    alignItems: "center",
    // backgroundColor: "#DDDDDD",
    padding: 10,
    width: 270,
    alignSelf: "center",
  },
  button: {
    alignItems: "center",
    // backgroundColor: "#DDDDDD",
    padding: 10,
    width: 220,
    alignSelf: "center",  
  },
  liststyle: {
    height: 500,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  imagestyle: {
    height: 500,
    width: 500,
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 100,
    // marginLeft:25,
  }
});

export default Screentwo;
