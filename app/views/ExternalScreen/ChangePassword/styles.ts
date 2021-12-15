import React from "react";
import { StyleSheet } from "react-native";

const styles = (o: any) => StyleSheet.create({
    image: {
        resizeMode: 'contain',
        alignSelf: 'center',
        height: 35,
        margin: 40,
    },
    text1: {
        alignSelf: 'center',
        color: 'black',
        fontSize: 40,
    },
    textInput: {
        // flex: 1,
        height: 50,
        width: "80%",
        margin: 15,
        padding: 10,
        borderWidth: 1,
        borderColor: 'lightslategrey',
        backgroundColor:'white',
    },
    textInputImage: {
        height: 20,
        width: 20,
        resizeMode: 'contain',
        position: 'absolute',
        alignSelf: 'center',
        marginLeft: '65%',
        tintColor:'black',
    },
    button: {
        backgroundColor: 'teal',
        alignSelf: 'center',
        width: o.isLandscape ? o.width * 0.755 : o.width * 0.805,
        height: o.isLandscape ? o.height * 0.14 : o.height * 0.060,
    },
    buttonText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10,
    },
    button2: {
        alignSelf: 'center',
        width: o.isLandscape ? o.width * 0.755 : o.width * 0.805,
        height: o.isLandscape ? o.height * 0.14 : o.height * 0.060,
        margin: 20,
        borderColor: 'orange',
        borderWidth: 1
    },
    buttonText2: {
        fontSize: 20,
        color: 'orange',
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10,
    },
})

export default styles;