import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import logo from "../assets/icon.png"
import React from "react";

export default function SignIn({ navigation }) {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={logo}/>
            <Text style={styles.heading}>How far, make we chat? 💬</Text>
            <View>
                <TextInput style={styles.field} placeholder="Enter your school email first :)"/>
                <TextInput style={styles.field} placeholder="Password"/>
                <TouchableOpacity
                    onPress={() => console.log("sign in")}
                    style={styles.button}>
                    <Text style={styles.buttonText}>
                        Login
                    </Text>
                </TouchableOpacity>
                <Text style={styles.paragraph} onPress={() => navigation.navigate("SignUp")}>
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
        width: 300,
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
