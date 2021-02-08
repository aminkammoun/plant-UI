import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./src/screens/homePlant";
import Navigator from "./src/routes/stackRoutes";
export default function App() {
  return <Navigator />;
}
