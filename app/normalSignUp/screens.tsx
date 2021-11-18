// import { StatusBar } from "react-native";
import React, { useState } from "react";
import { Text, View, Image, TextInput, TouchableOpacity, ScrollView } from "react-native";
import styles from "./styles";

// interface Random {
//     style: undefined
// }

export default function SignUpScreen() {
    const [firstname, setfirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [data, setData] = React.useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    });

    return (
        <ScrollView>
            <View style={styles.container}>
                <Image style={styles.image} source={require('./signup.jpg')} />

                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        maxLength={15}
                        placeholder="First Name"
                        placeholderTextColor="#003f5c"
                        onChangeText={(firstname) => setfirstName(firstname)}
                    />
                </View>
                {/* <Text style={styles.errorMsg}> Username must be 4 characters long. </Text> */}

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
                        keyboardType={'email-address'}
                        placeholder="Email"
                        placeholderTextColor="#003f5c"
                        onChangeText={(email) => setEmail(email)}
                    />
                </View>

                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        keyboardType={'numeric'}
                        placeholder="Password"
                        placeholderTextColor="#003f5c"
                        secureTextEntry={true}
                        onChangeText={(password) => setPassword(password)}
                    />
                </View>

                <View style={{ flexDirection: 'row' }}>

                    <TouchableOpacity>
                        <Text style={styles.forgot_button}>Forgot Password?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text style={styles.signin_button}>Sign In</Text>
                    </TouchableOpacity>

                </View>

                <TouchableOpacity style={styles.SignUpBtn}>
                    <Text>SIGN UP</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}