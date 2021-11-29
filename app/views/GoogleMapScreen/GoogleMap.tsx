import React from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import styles from './styles';

const GoogleMap = () => (
    <View style={styles.container}>

        <MapView
            style={styles.map}
            showsUserLocation={false}
            zoomEnabled={true}
            zoomControlEnabled={true}
            initialRegion={{
                latitude: 28.5995001,
                longitude: 77.3315623,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}>

            <Marker
                coordinate={{ latitude: 28.5995001, longitude: 77.3315623 }}
                title={"Successive Technologies"}
                description={"Successive Technologies"}
                pinColor="skyblue"
            />
        </MapView>

    </View>
);

export default GoogleMap;