import React, { useState } from "react";
import {
  Dimensions,
  StyleSheet,
  SafeAreaView,
  Image,
  Switch,
  Platform,
} from "react-native";
import bulbOff from "../../assets/the-light-images/bulb-off.jpg";
import bulbOn from "../../assets/the-light-images/bulb-on.jpg";

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

export default function Lightbulb() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <SafeAreaView style={styles.container}>
      <Image
        fadeDuration={0}
        source={isEnabled ? bulbOn : bulbOff}
        style={styles.image}
      />
      <Switch
        trackColor={{ false: "#fff", true: "#efe000" }}
        thumbColor={isEnabled ? "#fff" : "#fff"}
        onValueChange={toggleSwitch}
        value={isEnabled}
        style={styles.switch}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    minHeight: screenHeight
  },
  image: {
    maxWidth: screenWidth,
    maxHeight: screenHeight - 180,
    minHeight: screenHeight - 180,
    resizeMode: "contain",
    marginBottom: 20,
  },
  switch: {
    alignSelf: "center",
    transform: Platform.OS === "ios" ? [] : [{ scale: 1.5 }],
  },
});
