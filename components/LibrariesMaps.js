import * as React from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, Text, View, Dimensions, Platform } from "react-native";
import * as Permissions from "expo-permissions";

import customMarker from "../assets/images/custom_marker.png";

const styles = StyleSheet.create({
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  }
});

const LibrariesMaps = props => {
  React.useEffect(() => {
    _getLocationAsync();
  }, [props]);

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      //TODO: Improve Error handling here
      console.log("ERROR: Permission to access location was denied");
    }
  };

  function onMarkerSelect(libraryId) {
    console.log(libraryId);
  }

  return (
    <MapView
      style={styles.mapStyle}
      showsUserLocation={true}
      showsMyLocationButton={true}
      showsPointsOfInterest={false}
      initialRegion={{
        latitude: -29.85066,
        longitude: -51.1301,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }}
    >
      {props.libraries.map((lib, i) => {
        return (
          <Marker
            onCalloutPress={e => onMarkerSelect(lib.id)}
            key={i}
            image={customMarker}
            title={lib.title}
            coordinate={lib.coordinates}
            description={lib.description}
          />
        );
      })}
    </MapView>
  );
};

export default LibrariesMaps;
