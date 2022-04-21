import * as React from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { StyleSheet, View, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
export default () => (
  <View style={styles.container}>
    <MapView
      provider={PROVIDER_GOOGLE} // remove if not using Google Maps
      style={styles.map}
    ></MapView>
  </View>
);
