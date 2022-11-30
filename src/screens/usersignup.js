import { View, Text, StyleSheet, TouchableOpacity, Button, TextInput, Alert, ImageBackground } from "react-native";
import React, { useState } from "react";
import Checkbox from "expo-checkbox";

const usersignuppage = (props) => {
    // const [userName,setUserName] = useState("");
    // const [password,setPassword] = useState("");
    const [agree, setAgree] = useState(false);

    // const submit = () => {
    //     // return Alert.alert(userName,password);
    //     if(userName === "Dheeraj Batra" && password === "Dheeraj Batra"){
    //         Alert.alert(`Thank You ${userName}`);
    //     }
    //     else{
    //         Alert.alert("username and password is not correct");
    //     }
    // }
    return (
        <View style={styles.mainContainer}>
            <ImageBackground source={require("../../assets/parkingSignup.png")} style={styles.image}>
                <View style={styles.inputContainer}>
                    <Text style={styles.labels}>Username</Text>
                    <TextInput style={[
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
                    <Text style={styles.labels}>E-mail</Text>
                    <TextInput style={[
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
                <View style={styles.inputContainer}>
                    <Text style={styles.labels}>Password</Text>
                    <TextInput style={[
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
                <View style={styles.wrapper}>
                    <View style={styles.row1}>
                        <Checkbox
                            value={agree} onValueChange={() => setAgree(!agree)}
                            color={agree ? "#4630EB" : undefined}
                        />
                        <Text style={[{ fontWeight: "bold"}, {marginTop: 5}]}>
                            I have read and agree with all the T&C.
                        </Text>
                    </View>
                </View>
                {/* <Button title="Login" color="#4630EB"/> */}
                <View style={styles.space} />
                <TouchableOpacity
                    style={[
                        styles.button,
                        {
                            backgroundColor: agree ? "#4630EB" : "white",
                        },
                    ]}
                >
                    <Text>Sign Up</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
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
        fontSize: 25,
        // color: "344055",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "500",
        paddingTop: 20,
        paddingBottom: 15,
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
    image: {
        height: "100%",
        width: "100%",
        justifyContent: "center",
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        width: 100,
        alignSelf: "center",
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
    row1: {
        flexDirection: 'row',
        marginBottom: 10,
        marginTop: 10,
    },
}
)
export default usersignuppage;