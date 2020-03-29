import * as React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import * as WebBrowser from "expo-web-browser";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";
import HomeDetailScreen from "./HomeDetailScreen";

const HomeStack = createStackNavigator();

export default function MenuScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        headerTitle={"Mapa da Leitura"}
        name="HomeScreen"
        component={HomeScreen}
        options={({ route }) => ({ title: "Menu de ações" })}
      />
      <HomeStack.Screen name="HomeDetailScreen" component={HomeDetailScreen} />
    </HomeStack.Navigator>
  );
}
