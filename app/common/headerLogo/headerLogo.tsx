import React from "react";
import { Image, View } from 'react-native'
import { images } from "../../constants";
import styles from "./styles";

const HeaderLogo = () => {
    return (
        <View style={styles.container}>
            <Image source={images.logo_02} style={styles.logo} />
        </View>
    );
}

export default HeaderLogo;