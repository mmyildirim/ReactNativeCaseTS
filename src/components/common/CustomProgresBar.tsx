import React from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";

const { width, height } = Dimensions.get("screen");

const CustomProgresBar = () => {
  return (
    <View style={styles.ProgresBarContainer}>
      <Image
        style={styles.Image}
        source={require("../../../assets/loading.gif")}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  ProgresBarContainer: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  Image: {
    width: width * 0.7,
    height: height * 0.3,
  },
});
export default CustomProgresBar;
