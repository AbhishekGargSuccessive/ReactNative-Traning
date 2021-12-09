import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, ScrollView, ActivityIndicator } from 'react-native';
import styles from './styles';
import RenderItem from './renderItems';
import { useOrientation } from '../../config/orientation'

interface CourseProp {
    isloading: boolean
    data: any

}

const CourseScreen = (props: CourseProp) => {
    const { isloading, data } = props;
    const o = useOrientation()
    console.log(o)

    return (
        <ScrollView>
            <View style={styles(o).container}>
                {
                    isloading ? <ActivityIndicator /> :
                        (
                            <FlatList
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                data={data}
                                // keyExtractor={(index) => index.toString()}
                                renderItem={({ item }) => <RenderItem item={item} o={o} />}
                            />
                        )}
            </View>
        </ScrollView>
    );
};

export default CourseScreen;