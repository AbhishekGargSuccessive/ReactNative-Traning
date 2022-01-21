import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import styles from "./styles";
import { ProgressBar, Colors } from 'react-native-paper';
import { Icons } from "../../config";
import Constant from "../../config/constant";

interface RenderItemProps {
    item: any
    o: any
    navigation: any

}

const RenderItem = (props: RenderItemProps) => {
    const { item, o, navigation } = props;
    return (
        <ScrollView>
            <View style={styles(o).mainContainer}>
                <Text style={styles(o).text}>{Constant.Your_Courses}</Text>

                <Image source={Icons.nutrition} style={styles(o).image} />

                <Text style={styles(o).text2}>{Constant.Whole_Peroson_Health}</Text>

                <ProgressBar progress={0.5} color="green" style={styles(o).progressbar} />

                <TouchableOpacity style={styles(o).button} onPress={() => navigation.navigate("ContinueLearning")}>
                    <Text style={styles(o).text3}>{Constant.Continue_Learning}</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}
export default RenderItem;