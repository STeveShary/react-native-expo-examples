import React from "react";
import {View, Text, StyleSheet, Platform} from "react-native";

export default () => (
    <View style={styles.container}>
        <Text style={styles.text}>Hello World!</Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#3498db",
    },
    text: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#fff",
        textTransform: "uppercase",
    }
});
