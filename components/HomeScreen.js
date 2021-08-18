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
      <Text>-------------</Text>
      <Text style={styles.bigBlue}>Welcome to RoomToRead Bangladesh</Text>
      <Text> </Text>
      <Text> </Text>
      <Button title="Login" style={styles.loginButton}></Button>
      <Text> </Text>
      <Button title="Register"></Button>
      <Text> </Text>
      <Button title="Bangla Class Observation"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;
