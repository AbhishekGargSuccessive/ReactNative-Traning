import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';
import styles from '../HomeScreen/styles';

interface HomeModelProp {
    navigation: any
}


const HomeScreen = (props: HomeModelProp) => {
    const { navigation } = props;
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Button
                title="Go to details screen"
                onPress={() => navigation.navigate("Details")}
            />
        </View>
    );
};

export default HomeScreen;


{/* <ImageBackground
                source={require('./back.png')}
                style={{backgroundColor: 'red' }}></ImageBackground> */}