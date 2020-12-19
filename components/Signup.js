import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import React from "react";

export default function SignIn() {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Create an account</Text>
            <Text style={styles.paragraph}>Create your account and
            join ever evolving conversations near you! discover
            people and whatever the fuck</Text>

            <Text style={styles.field}>First Name</Text>
            <TextInput placeholder="John"/>

            <Text style={styles.field}>Last Name</Text>
            <TextInput placeholder="Bull"/>


            <Text style={styles.field}>Email</Text>
            <TextInput placeholder="johnbull@gmail.com"/>

            <Text style={styles.field}>Password</Text>
            <TextInput placeholder="*********"/>

            <Text style={styles.field}>Password</Text>
            <TextInput placeholder="+234 803 335 4342"/>

            <TouchableOpacity
                onPress={() => console.log("sign up")}
                style={styles.button}>
                <Text style={styles.buttonText}>
                    Sign up
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#323332',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
