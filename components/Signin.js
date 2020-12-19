import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import logo from "../assets/logo.png"
import React from "react";

export default function SignIn() {
    return (
        <View style={styles.container}>
            <Text style={styles.screenInfo}>sign in</Text>
            <Image style={styles.logo} source={logo}/>

            <Text style={styles.heading}>welcome to bubbles!</Text>

            <View>
                <TextInput style={styles.field} placeholder="Enter Your Full Name"/>
                <TextInput style={styles.field} placeholder="Password"/>
                <TouchableOpacity
                    onPress={() => console.log("sign in")}
                    style={styles.button}>
                    <Text style={styles.buttonText}>
                        Login
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#323332',
        alignItems: 'center',
        justifyContent: 'center',
    },
    screenInfo: {
        fontSize: 20,
        color: "#ffffff"
    },
    heading: {
        color: "#fff",
        padding: 5
    },
    field: {
        backgroundColor: "#fff"
    },
    button: {
        backgroundColor: "#323332",
        padding: 20,
        borderRadius: 5
    },
    buttonText: {
        fontSize: 20,
        color: "#ffffff"
    }
});
