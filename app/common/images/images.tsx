import React from "react";
import { Image } from "react-native";
import styles from "./styles";

const Images = () => {
    return (

        <Image style={styles.image} source={require('.././../assets/images/signup.jpg')} />
    )
}

export default Images;