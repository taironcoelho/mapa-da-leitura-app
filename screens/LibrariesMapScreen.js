import * as React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import LibrariesMaps from "../components/LibrariesMaps";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default function LibrariesMapScreen({ navigation }) {
  const [libraries, setLibraries] = React.useState([
    {
      id: "5ad34-hdfsk-342-dsda",
      title: "Biblioteca teste",
      description: "Biblioteca RNBC",
      coordinates: { latitude: -29.85066, longitude: -51.1301 }
    }
  ]);

  //TODO: Fetch all libraries for the map on load page
  // React.useEffect(() => {
  // }, []);

  return (
    <View style={styles.container}>
      <LibrariesMaps navigation={navigation} libraries={libraries} />
    </View>
  );
}
