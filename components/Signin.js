import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import logo from "../assets/icon.png"
import React from "react";

export default function SignIn() {
    return (
        <View style={styles.container}>
            <Text style={styles.screenInfo}>sign in</Text>
            <Image style={styles.logo} source={logo}/>

            <Text style={styles.heading}>welcome to bubbles! 💬</Text>

            <View>
                <TextInput style={styles.field} placeholder="Enter your school email"/>
                <TextInput style={styles.field} placeholder="Password"/>
                <TouchableOpacity
                    onPress={() => console.log("sign in")}
                    style={styles.button}>
                    <Text style={styles.buttonText}>
                        Login
                    </Text>
                </TouchableOpacity>
                <Text style={styles.paragraph} onPress={() => console.log("sign up nav")}>
                    I don't have an account <Text style={styles.signUpNav}>Sign Up</Text>
                </Text>
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
    screenInfo: {
        fontSize: 18,
        color: "#ffffff",
        textTransform: "capitalize",
    },
    logo: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 300,
        height: 300
    },
    heading: {
        color: "#fff",
        padding: 5,
        fontSize: 30,
        width: 200,
        textTransform: "capitalize",
        textAlign: "center",
        paddingBottom: 10,
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
        marginTop: 40
    },
    signUpNav: {
        fontSize: 15,
        color: "#6986ED",
    }
});
