import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const GoogleAutoComplete = () => {
    return (
        <GooglePlacesAutocomplete
            placeholder='Address'
            // onPress={(data, details = null) => {
            //     // 'details' is provided when fetchDetails = true
            //     console.log(data, details);
            // }}
            query={{
                key: 'AIzaSyCrtUPZtxWcBh5AQaeQ8dVHyJ2KW99KLoQ',
                language: 'en',
            }}
        />
    );
};

export default GoogleAutoComplete;