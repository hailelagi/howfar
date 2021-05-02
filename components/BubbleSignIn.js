import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import logo from "../assets/icon.png"
import React from "react";

export default function BubbleSignIn() {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={logo}/>
            <Text style={styles.paragraph}>
                If you have a bubble id created by a peer willing to host a chat session, you can
                find them here. </Text>
            <View>
                <TextInput style={styles.field} placeholder="What you like to be called"/>
                <TextInput style={styles.field} placeholder="Enter bubble id"/>
                <TouchableOpacity
                    onPress={() => console.log("enter bubble space")}
                    style={styles.button}>
                    <Text style={styles.buttonText}>
                        Ask to join
                    </Text>
                </TouchableOpacity>
            </View>
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
    logo: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 250,
        height: 250
    },
    field: {
        backgroundColor: "#fff",
        padding: 10,
        width: 300,
        margin: 10,
        borderRadius: 15
    },
    button: {
        backgroundColor: "#6986ED",
        padding: 12,
        margin: 10,
        borderRadius: 15
    },
    buttonText: {
        fontSize: 20,
        color: "#ffffff",
        textAlign: 'center'
    },
    paragraph: {
        fontSize: 15,
        color: "#ffffff",
        textAlign: "center",
    },
});
