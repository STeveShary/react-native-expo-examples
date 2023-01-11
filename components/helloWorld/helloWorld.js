import React from "react";
import {View, Text, StyleSheet, Platform, Button} from "react-native";
import {Audio} from "expo-av";

export default () => {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hello World!</Text>
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
    }
});

// const playSound = async () => {
//     const {sound} = await Audio.Sound.createAsync(require('../../assets/works-for-me.mp3'));
//     await sound.playAsync();
// };

// <Button title="Works for me!" onPress={playSound}/>
