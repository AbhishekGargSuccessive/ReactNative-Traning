import React from 'react';
import { View, Text, FlatList, TouchableOpacity, ScrollView, } from 'react-native';
import { ProgressData } from '../../config';
import Constant from '../../config/constant';
import RenderItem from './renderItem';
import styles from './style';

interface ProgressProps {
    navigation: any
}

const ProgressScreen = (props: ProgressProps) => {
    const { navigation } = props;
    return (
        <FlatList
            ListHeaderComponent={

                <View>
                    <Text style={styles.text1}>{Constant.Graduation_Requirements}</Text>
                    <Text style={styles.text2}>{Constant.Graduation_Requirements}</Text>
                </View>
            }

            data={ProgressData}
            extraData={ProgressData}
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
            renderItem={({ item }) => <RenderItem item={item} navigation={navigation} />}
        />


    );
};

export default ProgressScreen;