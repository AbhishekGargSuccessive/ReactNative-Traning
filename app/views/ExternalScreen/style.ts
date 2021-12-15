import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        // flex: 0.5,
        // alignSelf: 'center',
        // justifyContent: 'center'
        marginTop: 20
    },
    text1: {
        alignSelf: 'center',
        fontSize: 13,
        color: 'black'
    },
    text2: {
        fontSize: 21,
        alignSelf: 'center',
        fontWeight: 'bold',
        color: 'black'
    },
    text3: {
        fontSize: 23,
        fontWeight: 'bold',
        color: 'black'
    },
    text4: {
        fontSize: 15,
        color: 'black'
    },
    textmargin: {
        margin: 13
    },
    margin: {
        marginVertical: 15,
        marginHorizontal: 20,
    },
    border: {
        borderWidth: 1,
        borderColor: 'lightslategrey'
    },
    innertext: {
        justifyContent: "space-between",
        marginLeft: 15,
        marginTop: 10
    },
    text5: {
        fontSize: 20,
        color: 'black',
        marginBottom: 10,
    },
    leftlogo: {
        resizeMode: 'contain',
        tintColor: 'black',
        width: 20,
        height: 20,
        marginHorizontal: 50
    },
    borderleftlogo: {
        borderRadius: 50,
        height: 42,
        width: 42,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    borderHeight: {
        flexDirection: 'row',
        marginBottom: 15
    }
});

export default styles;