import React from "react";
import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    images: {
        width: 35,
        height: 34,
        tintColor: 'red',        
    }
})

export default styles;