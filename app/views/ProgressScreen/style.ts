import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    text1: {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 30,
        marginHorizontal: 20,
        color: 'black'
    },
    text2: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 25,
        marginHorizontal: 20,
        color: 'black'
    },
    view2: {
        margin: 20,
    },
    text3: {
        fontSize: 18,
        marginVertical: 20,
        fontWeight: "bold",
        color: 'black'

    },
    button: {
        fontSize: 15,
        alignSelf: 'center',
        color: 'black'
    },
    seperator: {
        height: .8,
        width: "90%",
        backgroundColor: 'lightslategrey',
        marginHorizontal: 20
    },
    opacity: {
        borderWidth: 1,
        height: 25,
        width: 105,
        alignSelf: 'flex-end',
        marginVertical: 20,
    },
    render: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20
    }
});

export default styles;