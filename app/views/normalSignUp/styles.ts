import React from "react"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },

    image: {
        marginBottom: 40,
        height: 200,
        width: 300
    },

    inputView: {
        backgroundColor: "#FFC0CB",
        borderRadius: 30,
        width: "80%",
        height: 45,
        marginBottom: 30,
        alignItems: 'flex-start',
    },

    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },

    forgot_button: {
        height: 30,
        marginBottom: 30,
        fontSize: 15,
        // textDecorationLine: "underline",
        fontStyle: "italic",
        // fontWeight: "bold",
    },

    signin_button: {
        height: 30,
        marginBottom: 30,
        fontSize: 15,
        textDecorationLine: "underline",
        fontStyle: "italic",
        fontWeight: "bold",
        marginLeft: 15
    },

    SignUpBtn: {
        width: "30%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        backgroundColor: "#3cc340",
    },
});


export default styles;
