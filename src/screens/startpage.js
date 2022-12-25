import {KeyboardAvoidingView ,View, Text, StyleSheet, TouchableOpacity, Button, TextInput, Alert, ImageBackground } from "react-native";
import React, { useState } from "react";
import Checkbox from "expo-checkbox";
import { auth } from 'firebase'

const ContactYoutube = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [agree, setAgree] = useState(false);

    // const submit = () => {
    //     // return Alert.alert(userName,password);
    //     if (userName === "Dheeraj Batra" && password === "Dheeraj Batra") {
    //         Alert.alert(`Thank You ${userName}`);
    //     }
    //     else {
    //         Alert.alert("username and password is not correct");
    //     }
    // }

    const handleSignUp = () => {
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log('Registered with:', user.email);
            })
            .catch(error => alert(error.message))
    }
    return (
        <KeyboardAvoidingView
            style={styles.maincontainer}
            behavior="padding"
        >
            <View style={styles.mainContainer}>
                <ImageBackground source={require("../../assets/parkingLogin.png")} style={styles.image}>
                    <Text style={styles.mainHeader}>Welcome Back!</Text>
                    <View style={styles.space} />
                    <View style={styles.space} />
                    <View style={styles.space} />
                    <View style={styles.space} />
                    <View style={styles.space} />
                    <View style={styles.inputContainer}>
                        <Text style={styles.labels}>Enter your E-mail</Text>
                        <TextInput
                            placeholder="Email"
                            value={email}
                            onChangeText={text => setEmail(text)}
                            style={[
                                styles.inputStyle,
                                {
                                    backgroundColor: agree ? "#FFFFFF" : "white",
                                },
                            ]}
                            autoCapitalize="none"
                            autoCorrect={false}
                        // value={userName}
                        // onChangeText={(actualData) => setUserName(actualData)}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.labels}>Enter your Password</Text>
                        <TextInput
                            placeholder="Password"
                            value={password}
                            onChangeText={text => setPassword(text)}
                            style={[
                                styles.inputStyle,
                                {
                                    backgroundColor: agree ? "#FFFFFF" : "white",
                                },
                            ]}
                            autoCapitalize="none"
                            autoCorrect={false}
                            secureTextEntry={true}
                        // value={password}
                        // onChangeText={(actualData) => setPassword(actualData)}
                        />
                    </View>
                    {/* <View style={[styles.wrapper, {marginLeft: 15}]}>
                    <Checkbox
                        value={agree} onValueChange={() => setAgree(!agree)}
                        color={agree ? "#4630EB" : undefined}
                    />
                    <Text>
                        I have read and agreed with the T&C
                    </Text>
                </View> */}
                    {/* <Button title="Login" color="#4630EB"/> */}
                    <View style={styles.space} />
                    <TouchableOpacity
                        style={[
                            styles.button,
                            { backgroundColor: agree ? "#4630EB" : "#7BE4F4", }, { borderRadius: 5 }, { borderColor: "#FFFFFF" }
                        ]}
                        disabled={!agree}
                        onPress={() => submit()}
                    >
                        <Text style={styles.textStyle1}>Login</Text>
                    </TouchableOpacity>
                    <View style={styles.space} />
                    <TouchableOpacity
                        onPress={handleSignUp}
                        style={[
                            styles.button,
                            {
                                backgroundColor: agree ? "#4630EB" : "white",
                            }, { borderRadius: 5 }, { borderColor: "#7BE4F4" }
                        ]}

                    // onPress={() => props.navigation.navigate("S2")}
                    >
                        <Text style={styles.textStyle}>Sign Up</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        height: "100%",
        paddingHorizontal: 30,
        paddingTop: 30,
        backgroundColor: "#fff",
    },
    space: {
        width: 20,
        height: 20,
    },
    mainHeader: {
        fontSize: 40,
        // color: "344055",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "900",
        paddingTop: 20,
        paddingBottom: 15,
        marginLeft: 15,
        marginTop: 30
    },
    description: {
        fontSize: 25,
        color: "#344055",
        fontWeight: "500",
        paddingTop: 20,
        paddingBottom: 15,
        textTransform: "capitalize",
    },
    inputContainer: {
        marginTop: 20,
        width: 400,
        alignSelf: "center",
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        width: 100,
        alignSelf: "center",
        borderRadius: 5
    },
    image: {
        height: "100%",
        width: "100%",
        justifyContent: "center",
    },
    labels: {
        fontSize: 18,
        color: "#000000",
        fontWeight: "bold",
        marginTop: 10,
        marginBottom: 5,
        lineHeight: 25,
    },
    inputStyle: {
        borderWidth: 1,
        borderColor: "rgba(0,0,0,0.3)",
        paddingHorizontal: 15,
        paddingVertical: 7,
        borderRadius: 1,
        fontSize: 18,
    },
    textStyle1: {
        color: "#FFFFFF",
        fontWeight: "bold",
    },
    textStyle: {
        color: "#7BE4F4",
        fontWeight: "bold",
    }
}
)
export default ContactYoutube;