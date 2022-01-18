import React from 'react';
import { View, FlatList, ScrollView, ActivityIndicator } from 'react-native';
import styles from './styles';
import RenderItem from './renderItems';
import { useOrientation } from '../../config/orientation'

interface CourseProp {
    isloading: boolean
    data: any
    navigation: any

}

const CourseScreen = (props: CourseProp) => {
    const { isloading, data, navigation } = props;
    const o = useOrientation()

    return (
        <ScrollView>
            <View style={styles(o).container}>
                {
                    isloading ? <ActivityIndicator size={'small'} color={'red'} /> :
                        (
                            <FlatList
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                data={data}
                                // keyExtractor={(index) => index.toString()}
                                renderItem={({ item }) => <RenderItem item={item} o={o} navigation={navigation} />}
                            />
                        )}
            </View>
        </ScrollView>
    );
};

export default CourseScreen;