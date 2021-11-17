import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import styles from '../DetailsScreen/style';

const DetailsScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Details Screen</Text>
            <Button
                title="Go to details screen...again"
                onPress={() => navigation.push("Details")}
            />
            <Button
                title="Go to home"
                onPress={() => navigation.navigate("Home")}
            />
            <Button
                title="Go back"
                onPress={() => navigation.goBack()}
            />
        </View>
    );
};

export default DetailsScreen;