//  Author: Mohammad Jihad Hossain
//  Create Date: 17/08/2021
//  Modify Date: 05/09/2021
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
  Linking,
  TouchableOpacity,
} from "react-native";

function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: "blue",
          fontWeight: "bold",
          fontSize: 20,
          padding: 25,
          marginTop: 50,
        }}
      >
        McGovern-Dole International Food for Education and Child Nutrition
        Program
      </Text>

      <View
        style={{
          flex: 1,
          flexDirection: "row",
        }}
      >
        <View style={{ flex: 1, marginLeft: 150 }}>
          <TouchableOpacity onPress={() => loadInBrowser("http://google.com")}>
            <Image
              style={styles.logoMain}
              source={require("../assets/rtr.png")}
            ></Image>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, marginRight: 150 }}>
          <TouchableOpacity>
            <Image
              style={styles.logoMain}
              source={require("../assets/wfp.png")}
            ></Image>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 1, padding: 2, marginLeft: 40 }}>
          <View style={styles.buttonView}>
            <Button title="Bangla Class Observation"></Button>
          </View>
        </View>
        <View style={{ flex: 1, padding: 2 }}>
          <View style={styles.buttonView}>
            <Button title="Library Management Observation"></Button>
          </View>
        </View>
      </View>

      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 1, padding: 2, marginLeft: 40 }}>
          <View style={styles.buttonView}>
            <Button title="Library Reading Activities Observation"></Button>
          </View>
        </View>
        <View style={{ flex: 1, padding: 2 }}>
          <View style={styles.buttonView}>
            <Button title="Overall School Observation"></Button>
          </View>
        </View>
      </View>

      <View>
        <Text>&copy; All Reserved, RoomtoRead Bangldesh</Text>
      </View>
    </View>
  );
}

const loadInBrowser = (url) => {
  Linking.openURL(url).catch((err) => console.error("Couldn't load page", err));
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoMain: {
    height: 100,
    width: 100,
    resizeMode: "contain",
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
