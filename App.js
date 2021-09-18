import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ImageBackground,
  Button,
} from "react-native";

//import Navigator from "./routes/navStack";

// Screen
import BanglaClassObservationScreen from "./components/BanglaClassObservationScreen";
import HomeScreen from "./components/HomeScreen";
import LoginScreen from "./components/LoginScreen";
import RegistrationScreen from "./components/RegistrationScreen";
import LibraryManagementObservationScreen from "./components/LibraryManagementObservationScreen";
import LibraryReadingActivitiesObservationScreen from "./components/LibraryReadingActivitiesObservationScreen";
import OverallSchoolObservationScreen from "./components/OverallSchoolObservationScreen";

// Navigation
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

// const Stack = createNativeStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <BanglaClassObservationScreen />

      // <NavigationContainer>
      //   <Stack.Navigator>
      //     <Stack.Screen
      //       name="Register"
      //       component={RegistrationScreen}
      //       options={{ title: "Welcome" }}
      //     />
      //     <Stack.Screen name="Login" component={LoginScreen} />
      //   </Stack.Navigator>
      // </NavigationContainer>
    );
  }
}
