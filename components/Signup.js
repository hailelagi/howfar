import {StyleSheet, Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
import React from "react";
import logo from "../assets/icon.png";

export default function SignUp() {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={logo}/>

            <Text style={styles.heading}> Join ever evolving conversations near you! how far? 👋 </Text>

            <TextInput style={styles.field} placeholder="Mark"/>
            <TextInput style={styles.field} placeholder="Musa"/>
            <TextInput style={styles.field} placeholder="markmusa@gmail.com"/>
            <TextInput style={styles.field} placeholder="+234 803 333 4455"/>
            <TextInput style={styles.field} placeholder="*********"/>

            <TouchableOpacity
                onPress={() => console.log("sign up")}
                style={styles.button}>
                <Text style={styles.buttonText}>
                    Sign up
                </Text>
            </TouchableOpacity>

            <Text style={styles.paragraph} onPress={() => console.log("sign up nav")}>
                i already have an account! <Text style={styles.signInNav}>sign in</Text>
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
    logo: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 200,
        height: 200
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
    title: {
        color: "#000",
        padding: 5,
        fontSize: 15,
        width: 300,
    },
    field: {
        backgroundColor: "#fff",
        padding: 10,
        width: 300,
        borderRadius: 15,
        margin: 8
    },
    button: {
        backgroundColor: "#6986ED",
        padding: 12,
        marginTop: 10,
        borderRadius: 15,
        width: 300
    },
    buttonText: {
        fontSize: 19,
        color: "#ffffff",
        textAlign: 'center'
    },
    paragraph: {
        fontSize: 15,
        color: "#ffffff",
        textAlign: "center",
        marginTop: 40
    },
    signInNav: {
        fontSize: 15,
        color: "#6986ED",
    }
});
