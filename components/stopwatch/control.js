import React from "react";
import {StyleSheet, Text, View, TouchableOpacity} from "react-native";

export default ({
                    isRunning,
                    handleLeftButtonPress,
                    handleRightButtonPress,
                }) => (
    <>
        <TouchableOpacity
            style={[styles.controlButtonBorder, {backgroundColor: "#414146"},]}
            onPress={handleLeftButtonPress}
        >
            <View style={styles.controlButton}>
                <Text style={{color: "#fff", fontSize: 20}}>
                    {isRunning ? "Lap" : "Reset"}
                </Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity
            style={[
                styles.controlButtonBorder,
                {backgroundColor: isRunning ? "#a22625" : "#15772b"},
            ]}
            onPress={handleRightButtonPress}
        >
            <View style={styles.controlButton}>
                <Text style={{color: isRunning ? "#ea4c49" : "#37d05c", fontSize: 20}}>
                    {isRunning ? "Stop" : "Start"}
                </Text>
            </View>
        </TouchableOpacity>
    </>
)

const CENTER = {
    justifyContent: "center",
    alignItems: "center",
};

const styles = StyleSheet.create({
    controlButtonBorder: {
        ...CENTER,
        width: 90,
        height: 90,
        borderRadius: 90,
    },
    controlButton: {
        ...CENTER,
        width: 85,
        height: 85,
        borderRadius: 85,
        borderColor: "#000",
        borderWidth: 1,
    },
});
