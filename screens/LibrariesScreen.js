import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LibrariesMapScreen from "./LibrariesMapScreen";
import LibraryDetailScreen from "./LibraryDetailScreen";

const LibrariesStack = createStackNavigator();

export default function MenuScreen() {
  return (
    <LibrariesStack.Navigator>
      <LibrariesStack.Screen
        name="LibrariesMapScreen"
        component={LibrariesMapScreen}
        options={({ route }) => ({ title: "Mapa de bibliotecas" })}
      />
      <LibrariesStack.Screen
        name="LibraryDetailScreen"
        component={LibraryDetailScreen}
        options={({ route }) => ({ title: "Mural da Biblioteca" })}
      />
    </LibrariesStack.Navigator>
  );
}
