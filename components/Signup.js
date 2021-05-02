import {StyleSheet, Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
import React, { useState } from "react";
import logo from "../assets/icon.png";

export default function SignUp({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [validEmail, setValidEmail] = useState("not-valid");
    const [validPassword, setValidPassword] = useState("not-valid-pass");
    const [confirmValidPassword, setValidConfirmPassword] = useState(
        "not-valid-pass"
    );
    const [flashError, setflashError] = useState("");
    const [redirect, setRedirect] = useState(false);

    // TODO: validate input
    function handleSignup(e) {
        // e.preventDefault();
        // create auth token and login
        fetch("/api/registration", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            mode: "cors",
            body: `user[email]=${email}&user[password]=${password}&user[password_confirmation]=${confirmPassword}`,
        })
            .then((res) => res.json())
            .then((payload) => {
                if (payload.hasOwnProperty("data")) {
                    // TODO: replace with cookie - refresh cycle
                    setflashError("");
                    setAccess(payload.data.access_token);
                    setRefresh(payload.data.renewal_token);
                    setRedirect(true);
                } else {
                    setflashError(
                        payload.error.message +
                        " reason: " +
                        Object.keys(payload.error.errors) +
                        " " +
                        Object.values(payload.error.errors)
                    );
                }
            })
            .catch((error) => {
                setflashError(error);
            });
    }

    function handleValidation(e) {
        const isEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        const name = e.target.name;
        const value = e.target.value;

        if (name === "user[email]") {
            setEmail(value);
            if (isEmail.test(value)) {
                setValidEmail("valid");
            } else {
                setValidEmail("not-valid");
            }
        }
        if (name === "user[password]") {
            setPassword(value);
            if (value.length >= 8) {
                setValidPassword("valid-pass");
            } else {
                setValidPassword("not-valid-pass");
            }
        }
        if (name === "user[password_confirmation]") {
            setConfirmPassword(value);
            if (value.length >= 8 && value === password) {
                setValidConfirmPassword("valid-pass");
            } else {
                setValidConfirmPassword("not-valid-pass");
            }
        }
    }

    const flash = <div className="flash">{flashError}</div>;

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={logo}/>

            <Text style={styles.heading}>Join ever evolving social circles as a creator or a fan 👋</Text>
            <Text style={styles.heading}>Not sure yet? that's okay you can change your mind at anytime!</Text>
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

            <Text style={styles.paragraph} onPress={() => navigation.navigate("SignIn")}>
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
        fontSize: 16,
        width: 300,
        textAlign: "center",
        marginBottom: 10
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
