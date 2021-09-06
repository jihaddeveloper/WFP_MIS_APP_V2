//  Author: Mohammad Jihad Hossain
//  Create Date: 01/09/2021
//  Modify Date: 01/09/2021
//  Description:  Navigation settings

import { createStackNavigator } from "react-navigation/native-stack";
import { createAppContainer } from "react-navigation/native";

import BanglaClassObservationScreen from "../components/BanglaClassObservationScreen";
import HomeScreen from "../components/HomeScreen";
import LoginScreen from "../components/LoginScreen";
import RegistrationScreen from "../components/RegistrationScreen";
import LibraryManagementObservationScreen from "../components/LibraryManagementObservationScreen";
import LibraryReadingActivitiesObservationScreen from "../components/LibraryReadingActivitiesObservationScreen";
import OverallSchoolObservationScreen from "../components/OverallSchoolObservationScreen";

const screens = {
  Register: { screen: RegistrationScreen },
  Login: { screen: LoginScreen },
  Home: { screen: HomeScreen },
  LibraryManagement: { screen: LibraryManagementObservationScreen },
  LibraryReading: { screen: LibraryReadingActivitiesObservationScreen },
  BanglaClass: { screen: BanglaClassObservationScreen },
  OverallSchool: { screen: OverallSchoolObservationScreen },
};

const NavStack = createStackNavigator(screens);

export default createAppContainer(NavStack);
