// import { StatusBar } from "react-native";
import React, { useState } from "react";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";
import * as Animatable from 'react-native-animatable';

interface Random {
    style: undefined
}

export default function SignUpScreen() {
    const [firstname, setfirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('./signup.jpg')} />

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="First Name"
                    placeholderTextColor="#003f5c"
                    onChangeText={(firstname) => setfirstName(firstname)}
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Last Name"
                    placeholderTextColor="#003f5c"
                    onChangeText={(lastname) => setLastName(lastname)}
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Email"
                    placeholderTextColor="#003f5c"
                    onChangeText={(email) => setEmail(email)}
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Password"
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />
            </View>

            <TouchableOpacity>
                <Text style={styles.forgot_button}>Forgot Password? Sign In</Text>
            </TouchableOpacity>

            {/* <Animatable.Text
                animation='bounceIn' //duration='150'
                style={{ fontSize: 30 }} >

            </Animatable.Text> */}

            <TouchableOpacity style={styles.SignUpBtn}>
                <Text>SIGN UP</Text>
            </TouchableOpacity>
        </View>
    );
}