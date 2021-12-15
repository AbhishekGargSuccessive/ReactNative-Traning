import React from 'react';
import { View, Text, FlatList, TouchableOpacity, } from 'react-native';
import styles from './style';

interface ProgressProps {
    navigation: any
}

const DATA = [
    {
        id: '1',
        title: 'Tests 2/4',
    },
    {
        id: '2',
        title: 'Coaching Circles 2/5',
    },
    {
        id: '3',
        title: 'Coaching Sessions 6/6',
    },
];

const ProgressScreen = (props: ProgressProps) => {
    const { navigation } = props;
    return (
        <View style={styles.container}>

            <Text style={styles.text1}>Graduation Requirements</Text>

            <Text style={styles.text2}>Graduation Requirements</Text>

            <View style={{ margin: 20, }}>

                <FlatList
                    data={DATA}
                    ItemSeparatorComponent={() => {
                        return (
                            <View style={styles.seperator} />
                        )
                    }}
                    ListFooterComponent={() => {
                        return (
                            <View style={styles.seperator} />
                        )
                    }}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.render}>
                                <Text style={styles.text3}>{item.title}</Text>
                                <TouchableOpacity style={styles.opacity} onPress={() => navigation.navigate("External")}>
                                    <Text style={styles.button}>View Details</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    }}
                />
            </View>

        </View>
    );
};

export default ProgressScreen;