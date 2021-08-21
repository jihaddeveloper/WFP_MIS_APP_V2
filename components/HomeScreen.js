//  Author: Mohammad Jihad Hossain
//  Create Date: 17/08/2021
//  Modify Date: 21/08/2021
//  Description: Home screen component

import React from "react";
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Text,
  Button,
} from "react-native";

function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/rtr.png")}
        style={{
          width: 200,
          height: 200,
          resizeMode: "contain",
        }}
      ></Image>
      <Text>-------------</Text>
      <Text style={{ fontSize: 20 }}>Welcome to RoomToRead Bangladesh</Text>
      <Text></Text>
      <Text></Text>
      <View style={styles.buttonView}>
        <Button title="Bangla Class Observation"></Button>
      </View>
      <View style={styles.buttonView}>
        <Button title="Library Management Observation"></Button>
      </View>
      <View style={styles.buttonView}>
        <Button title="Library Reading Activities Observation"></Button>
      </View>
      <View style={styles.buttonView}>
        <Button title="Overall School Observation"></Button>
      </View>
      <View style={styles.buttonView}>
        <Button title="Monthly Reporting Form"></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonView: {
    width: "80%",
    backgroundColor: "#465881",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
});

export default HomeScreen;
