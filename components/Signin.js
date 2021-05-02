import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import logo from "../assets/icon.png"
import React from "react";

export default function SignIn({ navigation }) {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={logo}/>
            <Text style={styles.heading}>
                <Text style={styles.logoHeading}>How far</Text> is the social network
                for Nigerian creatives to express their art and get paid.
            </Text>
            <View>
                <TextInput style={styles.field} placeholder="Enter your username"/>
                <TextInput style={styles.field} placeholder="Password"/>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Home")}
                    style={styles.button}>
                    <Text style={styles.buttonText}>
                        Login
                    </Text>
                </TouchableOpacity>
                <Text style={styles.paragraph}>
                    Don't have an account? :(</Text>
                <Text style={styles.signUpNav} onPress={() => navigation.navigate("SignUp")} >get started!</Text>
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
        width: 300,
        height: 300
    },
    heading: {
        color: "#fff",
        padding: 5,
        fontSize: 18,
        width: 300,
        textAlign: "center",
        paddingBottom: 10
    },
    logoHeading: {
        fontSize: 21,
        fontWeight: 600,
        color: "#6986ED",
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
        marginTop: 35
    },
    signUpNav: {
        fontSize: 15,
        color: "#6986ED",
        textAlign: "center",
        marginTop: 10,
        marginBottom: 10
    },
    bubble: {
        fontSize: 17,
        color: "#6986ED",
        textAlign: "center",
    },
    highlightContent: {
    }
});
