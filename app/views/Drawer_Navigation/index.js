import React, {useState} from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Modal,
  TouchableWithoutFeedback,
  SafeAreaView,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {constants, dummyData, icons} from '../../constants';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import RenderItems from './renderItem';
import styles from './styles';

const CustomDrawer = props => {
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();
  const ProfileData = useSelector(state => state.Profile);

  const openCamara = () => {
    const options = {
      storageOptions: {
        path: 'images',
        mediaType: 'photo',
      },
      includeBase64: true,
    };

    launchCamera(options, response => {
      if (response.didCancel) {
      } else if (response.error) {
      } else if (response.customButton) {
      } else {
        const source = {uri: response.assets[0].uri};
        setModalVisible(false);
        dispatch({type: 'PROFILE', payload: source.uri});
      }
    });
  };

  const launchLibrary = () => {
    let options = {
      width: 20,
      height: 20,

      resizeMode: 'contain',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, response => {
      if (response.didCancel) {
      } else if (response.error) {
      } else if (response.customButton) {
        Alert.alert(response.customButton);
      } else {
        const source = {uri: response.assets[0].uri};
        setModalVisible(false);
        dispatch({type: 'PROFILE', payload: source.uri});
      }
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalContainer}>
          <TouchableWithoutFeedback
            onPress={() => setModalVisible(!modalVisible)}>
            <View style={styles.touchableModel} />
          </TouchableWithoutFeedback>
          <View style={styles.modalView}>
            <TouchableOpacity onPress={() => openCamara()}>
              <View style={styles.modalIconContainer}>
                <Image source={icons.camera} style={styles.modalIcon} />
                <Text style={styles.modalIconText}>
                  {constants.keywords.Camera}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => launchLibrary()}>
              <View style={styles.modalIconContainer}>
                <Image source={icons.gallery} style={styles.modalIcon} />
                <Text style={styles.modalIconText}>
                  {constants.keywords.Gallery}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
              <View style={styles.modalIconContainer}>
                <Image source={icons.cross} style={styles.modalIcon} />
                <Text style={styles.modalIconText}>
                  {constants.keywords.Cancel}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
        <Image source={icons.cross} style={styles.closeIcon} />
      </TouchableOpacity>
      <View style={styles.upperContainer}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Image source={{uri: ProfileData}} style={styles.profileIcon} />
        </TouchableOpacity>
        <View>
          <Text style={styles.nameText}>
            {constants.keywords.Abhishek_Garg}
            {/* {UserData} */}
          </Text>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('MyAccount')}>
            <Text style={styles.profileText}>
              {constants.keywords.View_your_profile}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={dummyData.drawer}
        extraData={dummyData.drawer}
        renderItem={({item, index}) => (
          <RenderItems
            item={item}
            index={index}
            navigation={props.navigation}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default CustomDrawer;
