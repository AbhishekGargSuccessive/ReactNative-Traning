import React from "react";
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Help, LeftArrow, PadLock } from "../../components/Logo";
import styles from '../ExternalScreen/style';

interface ExternalProps {
    navigation: any
}
const DATA = [
    {
        id: "1",
        title: "Test 1",
    },
    {
        id: "2",
        title: "Test 2",
    },
    {
        id: "3",
        title: "Test 3",
    },
    {
        id: "4",
        title: "Test 4",
    },
];

const ExternalProgressScreen = (props: ExternalProps) => {
    const { navigation } = props;
    return (
        <FlatList
            ListHeaderComponent={
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <LeftArrow navigation={navigation} />
                        <Help />
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.text1}>HEALTH COACH TRAINING PROGRAM</Text>
                        <Text style={styles.text2}>Graduation Requirements</Text>

                        <View>
                            <View style={styles.textmargin}>
                                <Text style={styles.text3}> Test Results </Text>
                                <Text style={styles.text4}> 2/4 - Required to graduate </Text>
                            </View>
                            <View style={styles.textmargin}>
                                <Text style={styles.text3}> Course </Text>
                                <Text style={styles.text4}> Health Coach Training Program </Text>
                            </View>

                            <View style={styles.textmargin}>
                                <Text style={styles.text3}> Student </Text>
                                <Text style={styles.text4}> JenABobbe </Text>
                            </View>
                        </View>
                    </View>
                </View>

            }
            data={DATA}
            // extraData={DATA}
            // keyExtractor={(_, index) => index.toString()}
            renderItem={({ item, index }) => {
                return (
                    <View style={styles.margin}>
                        <TouchableOpacity style={styles.border}>
                            <View style={styles.innertext}>
                                <Text style={styles.text5}>{item.title}</Text>
                                <View style={styles.borderHeight}>
                                    <PadLock />
                                    <Text style={{ marginLeft: 5, color:'lightslategrey' }}>Opening Soon</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                );
            }}
        />

    );
};
export default ExternalProgressScreen;