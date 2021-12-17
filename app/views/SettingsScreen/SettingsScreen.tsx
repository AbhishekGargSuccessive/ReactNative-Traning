import React from 'react';
import { View, Text, ScrollView, Image, } from 'react-native';
import Button from '../../components/Button/Button';
import styles from '../SettingsScreen/styles'
import { ItemSeperator } from '../../components/ItemSeperator/ItemSeperator'
import ItemSeperatorMain from '../../components/ItemSeperator/ItemSeperator';
import { useOrientation } from '../../config/orientation'

interface SettingsProps {
  navigation: any
}

const SettingsScreen = (props: SettingsProps) => {
  const { navigation } = props;
  const o = useOrientation()

  return (
    <ScrollView style={styles(o).container}>

      <View style={styles(o).Upper}>
        <Image source={require('../../assets/user_avatar.png')} style={styles(o).Profile} />
        <View style={styles(o).identity}>
          <Text style={styles(o).name}>Abhishek Garg</Text>
          <Text style={styles(o).color}>abhishek.garg@successive.tech</Text>
        </View>
      </View>

      <ItemSeperatorMain />

      <Text style={styles(o).text}>MANAGE ACCOUNT</Text>

      <View style={styles(o).lowerPart}>
        <Button
          name="Profile"
          item={<View style={styles(o).Block}>
            <Image source={require('../../assets/profile.png')} style={styles(o).icon} />
            <Text style={styles(o).IconName}>Profile</Text>
          </View>} navigation={navigation} />

        <ItemSeperator />

        <Button
          name="ChangePassword"
          item={<View style={styles(o).Block}>
            <Image source={require('../../assets/padlock.png')} style={styles(o).icon} />
            <Text style={styles(o).IconName}>Change Password </Text>
          </View>} navigation={navigation} />

        <ItemSeperator />

        <Button
          name="Communication"
          item={<View style={styles(o).Block}>
            <Image source={require('../../assets/communication.png')} style={styles(o).icon} />
            <Text style={styles(o).IconName}>Communication Preferences</Text>
          </View>} navigation={navigation} />

        <ItemSeperator />

        <Button
          item={<View style={styles(o).Block}>
            <Image source={require('../../assets/translate.png')} style={styles(o).icon} />
            <Text style={styles(o).IconName}>Change Language</Text>
          </View>} navigation={navigation} name={undefined} />

        <ItemSeperator />

        <Button
          item={<View style={styles(o).Block}>
            <Image source={require('../../assets/logout.png')} style={styles(o).icon} />
            <Text style={styles(o).IconName}>Sign Out</Text>
          </View>} navigation={navigation} name={undefined} />

        <ItemSeperator />

      </View>

    </ScrollView>
  );
};

export default SettingsScreen;