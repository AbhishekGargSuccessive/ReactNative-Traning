import React from "react";
import { StyleSheet, View } from "react-native";
import { useOrientation } from '../../config/orientation'
import styles from "./styles";

const o = useOrientation()
const ItemSeperatorMain = () => {
    return (
        <View style={styles(o).mainSeperator} />
    )
}

export const ItemSeperator = () => {
    const o = useOrientation()
    return (
        <View style={styles(o).seperator} />
    )
}

export default ItemSeperatorMain;