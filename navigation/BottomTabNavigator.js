import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import TabBarIcon from "../components/TabBarIcon";
import MenuScreen from "../screens/MenuScreen";
import LibrariesScreen from "../screens/LibrariesScreen";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Menu"
          component={MenuScreen}
          options={{
            title: "Menu",
            tabBarIcon: ({ focused }) => (
              <TabBarIcon focused={focused} name="md-menu" />
            )
          }}
        />
        <Tab.Screen
          name="Map"
          component={LibrariesScreen}
          options={({ route }) => ({
            title: "Mapa de Bibliotecas",
            tabBarIcon: ({ focused }) => (
              <TabBarIcon focused={focused} name="md-map" />
            )
          })}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
