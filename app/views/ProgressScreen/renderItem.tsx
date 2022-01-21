import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Constant } from "../../config";
import styles from "./style";

interface RenderItem {
    item: any
    navigation: any
}

const RenderItem = (props: RenderItem) => {
    const { item, navigation } = props;
    return (
        <View style={styles.render}>
            <Text style={styles.text3}>{item.title}</Text>
            <TouchableOpacity style={styles.opacity} onPress={() => navigation.navigate("External")}>
                <Text style={styles.button}>{Constant.View_Details}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default RenderItem;