import React from 'react';
import { View, Text, Button, Alert } from 'react-native';
import styles from './style';

interface BookModelProp {
    navigation: any
}

const BookmarkScreen = (props: BookModelProp) => {
    const { navigation } = props;
    return (
        <View style={styles.container}>
            <Text>Bookmark Screen</Text>
            <Button
                title="Click Here"
                onPress={() => Alert.alert('Button Clicked!')}
            />

        </View>
    );
}

export default BookmarkScreen;