import React, { useState } from "react";
import { Text, StyleSheet, View, Button, Image, TextInput } from "react-native";
import { color } from "react-native-reanimated";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const feedbackpage = ({ navigation }) => {
    const [text, setText] = useState('');
    return (
        <View style={{ marginTop: 150 }}>
            <Icon style={{ alignSelf: "center" }} name="check-circle" color="#536EE8" size={250} />
            <View style={styles.space} />
            <Text style={styles.spacee}>Parked with super fast speed</Text>
            <Text style={styles.spaceee}>Saved 5 minutes!!</Text>
            <View style={styles.space} />
            <View style={styles.inputContainer}>
                <View style={styles.row1}>
                    <Icon name="message" color="#536EE8" size={25} />
                    <Text style={{ color: "#777777", marginLeft: 10, fontSize: 20 }}>FeedBack</Text>
                </View>
                <TextInput style={styles.inputStyle}
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={text}
                    onChangeText={(newtext) => setText(newtext)}
                />
            </View>
            
            <View style={styles.button}>
                <Button
                    onPress={() => navigation.navigate("")}
                    title="Done"
                />
            </View>
        </View>
    );
};

// const Rating = () => {
//     const [rating, setRating] = useState(0);
//     const [rating2, setRating2] = useState(0);
//     return (
//         <>
//             <Header title="Star rating page" />
//             <ExternalInfo page="starRating" />
//             <div className="row">
//                 <div className="col text-center">
//                     <h2>Rate me</h2>
//                     <p>Rating component</p>
//                     <Rate rating={rating} onRating={(rate) => setRating(rate)} />
//                     <p>Rating - {rating}</p>
//                     <Rate rating={rating2} onRating={(rate) => setRating2(rate)} />
//                     <p>Rating - {rating2}</p>
//                 </div>
//             </div>
//         </>
//     );
// };
//color={{filled: "rgb(136 87 25)", unfilled: "rgb(214 184 147)"}}
//count={10}
// export default Rating;

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    },
    space: {
        width: 20,
        height: 20,
    },
    liststyle: {
        height: 500,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    spacee: {
        alignSelf: "center",
        fontSize: 25
    },
    spaceee: {
        alignSelf: "center",
        fontSize: 25
    },
    inputContainer: {
        marginTop: 20,
        width: 400,
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
    imagestyle: {
        height: 300,
        width: 300,
        alignItems: "center",
        justifyContent: "center",
        // marginLeft: 25,
        alignSelf: "center"
    },
    row1: {
        flexDirection: 'row',
        marginBottom: 10,
        marginTop: 40,
    },
    button: {
        alignItems: "center",
        // backgroundColor: "#DDDDDD",
        padding: 25,
        width: 130,
        alignSelf: "center",

    },
});

export default feedbackpage;
