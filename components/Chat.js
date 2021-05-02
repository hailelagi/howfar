import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import React from "react";

export default function Chat() {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>
                Chat screen
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#161618',
        alignItems: 'center',
        justifyContent: 'center',
    },
    heading: {
        color: "#ffffff",
        padding: 5,
        fontSize: 22,
        width: 300,
        margin: 10,
        textTransform: "capitalize",
        textAlign: "center"
    },
});
