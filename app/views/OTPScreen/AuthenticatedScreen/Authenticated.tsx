import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import auth from '@react-native-firebase/auth';
import styles from './styles';

const Authenticated = () => {
    return (
        <View style={styles.screen}>
            <Text style={styles.text}>You're Logged in</Text>
            <View style={{ marginTop: 30 }}>
                <Button title="Signout" onPress={() => auth().signOut()} />
            </View>
        </View>
    );
}
export default Authenticated