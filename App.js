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
import BanglaClassObservationScreen from "./components/BanglaClassObservationScreen";
import HomeScreen from "./components/HomeScreen";
import LoginScreen from "./components/LoginScreen";
import RegistrationScreen from "./components/RegistrationScreen";
import LibraryManagementObservationScreen from "./components/LibraryManagementObservationScreen";
import LibraryReadingActivitiesObservationScreen from "./components/LibraryReadingActivitiesObservationScreen";

export default class App extends React.Component {
  render() {
    return <LibraryReadingActivitiesObservationScreen />;
  }
}
