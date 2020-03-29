import * as React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  BackHandler
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import * as WebBrowser from "expo-web-browser";
import { MonoText } from "../components/StyledText";

export default function LibraryDetailScreen({ route, navigation }) {
  const { libraryId } = route.params;

  React.useEffect(() => {
    console.log("USE EFFECT LIBRARY DETAIL");
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Mural da biblioteca: {libraryId}</Text>
    </View>
  );
}
