import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import React from "react";
import { NavigationContainer} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Profile from "./Profile";
import Chat from "./Chat";
import Discover from "./Discover";
import homeImg from "../assets/homeImg.svg"
import profileImg from "../assets/profileImg.svg"
import chatImg from "../assets/chatImg.svg"
import discoverImg from "../assets/discoverImg.svg"

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Image style={styles.tab} source={homeImg} onPress={() => navigation.navigate("Home")}/>
            <Image style={styles.tab} source={profileImg} onPress={() => navigation.navigate("Profile")}/>
            <Image style={styles.tab} source={chatImg} onPress={() => navigation.navigate("Chat")}/>
            <Image style={styles.tab} source={discoverImg} onPress={() => navigation.navigate("Discover")}/>
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
    tab: {
        width: 50
    }
});
