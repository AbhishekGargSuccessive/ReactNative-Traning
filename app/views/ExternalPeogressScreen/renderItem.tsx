import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { PadLock } from "../../components/Logo/Logo";
import { Constant } from "../../config";
import styles from './style'

interface RenderItemProps {
    item: any
}

const RenderItem = (props: RenderItemProps) => {
    const { item } = props;
    return (
        <View style={styles.margin}>
            <TouchableOpacity style={styles.border}>
                <View style={styles.innertext}>
                    <Text style={styles.text5}>{item.title}</Text>
                    <View style={styles.borderHeight}>
                        <PadLock />
                        <Text style={styles.text6}>{Constant.Opening_Soon}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default RenderItem;