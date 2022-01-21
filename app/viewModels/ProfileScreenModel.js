import React, { useState } from "react";
import ProfileScreen from '../views/Profile/ProfileScreen'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const ProfileScreenModel = (props) => {

    const { navigation } = props
    const [editPI, setEditPI] = useState(false)
    const [editContact, setEditContact] = useState(false)
    const [editAddress, setEditAddress] = useState(false)
    const [modalVisible, setModalVisible] = useState(false);
    const [image, setImage] = useState('https://scontent-del1-1.xx.fbcdn.net/v/t1.6435-1/cp0/e15/q65/p74x74/32484589_2133374550282748_5581910179881943040_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=dbb9e7&efg=eyJpIjoiYiJ9&_nc_ohc=eWbsrAJd3HIAX9Da9GM&_nc_ht=scontent-del1-1.xx&oh=00_AT8vhSpNoBaRN_yNQcTVzhXRphuN0t6vYkM1sh7HS40eFw&oe=61DDCB10')

    const launchLibrary = () => {
        let options = {
            width: 20,
            height: 20,
            resizeMode: "contain",
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        launchImageLibrary(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
                Alert.alert(response.customButton);
            } else {
                const source = { uri: response.assets[0].uri };

                console.log('response', JSON.stringify(response.assets[0].uri));
                console.log(source)
                setImage(source.uri)
                setModalVisible(false)
            }
        });

    }

    const openCamara = () => {
        const options = {
            storageOptions: {
                path: 'images',
                mediaType: 'photo',
            },
            includeBase64: true,
        };

        launchCamera(options, response => {
            console.log(response);
            if (response.didCancel) {
                console.log('‘User cancelled image picker’');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = { uri: response.assets[0].uri };

                console.log('response', JSON.stringify(response.assets[0].uri));
                console.log(source)
                setImage(source.uri)
                setModalVisible(false)
            }
        });
    };



    return (
        <ProfileScreen
            navigation={navigation}
            editPI={editPI}
            setEditPI={setEditPI}
            editContact={editContact}
            setEditContact={setEditContact}
            editAddress={editAddress}
            setEditAddress={setEditAddress}
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            image={image}
            setImage={setImage}
            openCamara={openCamara}
            launchLibrary={launchLibrary}
        />
    )
}

export default ProfileScreenModel;