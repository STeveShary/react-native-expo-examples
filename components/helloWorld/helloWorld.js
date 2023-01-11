import React from "react";
import {View, Text, StyleSheet, Platform, Button} from "react-native";
import {Audio} from "expo-av";

export default () => {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hello World!</Text>
            {/*<Button title="Works for me!" onPress={playSound}/>*/}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
    },
    text: {
        fontSize: 30,
        fontWeight: "normal",
        marginBottom: 30,
    }
});

// const playSound = async () => {
//     const {sound} = await Audio.Sound.createAsync(require('../../assets/works-for-me.mp3'));
//     await sound.playAsync();
// };
