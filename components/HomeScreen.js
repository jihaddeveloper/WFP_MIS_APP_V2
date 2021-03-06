//  Author: Mohammad Jihad Hossain
//  Create Date: 17/08/2021
//  Modify Date: 19/09/2021
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
      <View style={{ flexShrink: 1 }}>
        <Text
          style={{
            color: "blue",
            fontWeight: "bold",
            fontSize: 20,
            padding: 25,
            alignContent: "center",
            textAlign: "center",
            alignSelf: "center",
            marginTop: 100,
            marginLeft: 100,
            marginRight: 100,
          }}
        >
          McGovern-Dole International Food for Education and Child Nutrition
          Program
        </Text>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: "row",
          marginTop: 50,
        }}
      >
        <View style={{ flex: 1, marginLeft: 200 }}>
          <TouchableOpacity onPress={() => loadInBrowser("http://google.com")}>
            <Image
              style={styles.logoMain}
              source={require("../assets/rtr.png")}
            ></Image>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, marginRight: 200 }}>
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
            <Button title="Bangla Class"></Button>
          </View>
        </View>
        <View style={{ flex: 1, padding: 2 }}>
          <View style={styles.buttonView}>
            <Button title="Library Management"></Button>
          </View>
        </View>
      </View>

      <View style={{ flexDirection: "row", marginBottom: 300 }}>
        <View style={{ flex: 1, padding: 2, marginLeft: 40 }}>
          <View style={styles.buttonView}>
            <Button title="Library Reading"></Button>
          </View>
        </View>
        <View style={{ flex: 1, padding: 2 }}>
          <View style={styles.buttonView}>
            <Button title="Overall School"></Button>
          </View>
        </View>
      </View>

      <View>
        <Text>&copy; All Rights Reserved, RoomtoRead Bangladesh</Text>
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
