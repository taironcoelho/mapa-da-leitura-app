import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LibrariesMapScreen from "./LibrariesMapScreen";

const LibrariesStack = createStackNavigator();

export default function MenuScreen() {
  return (
    <LibrariesStack.Navigator>
      <LibrariesStack.Screen
        name="LibrariesMapScreen"
        component={LibrariesMapScreen}
        options={({ route }) => ({ title: "Mapa de bibliotecas" })}
      />
    </LibrariesStack.Navigator>
  );
}
