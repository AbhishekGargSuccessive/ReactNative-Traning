import React from 'react';
import { View, Text, ScrollView, Image, } from 'react-native';
import Button from '../../components/Button/Button';
import styles from '../SettingsScreen/styles'
import ItemSeperatorMain from '../../components/ItemSeperator/ItemSeperator'

interface SettingsProps {
  navigation: any
}

const SettingsScreen = (props: SettingsProps) => {
  const { navigation } = props;
  const ItemSeperator = () => {
    return (
      <View style={{ height: 1, width: "90%", backgroundColor: 'lightslategrey', marginHorizontal: 20 }} />
    )
  }
  return (
    <ScrollView style={styles.container}>

      <View style={styles.Upper}>
        <Image source={require('../../assets/user_avatar.png')} style={styles.Profile} />
        <View style={styles.identity}>
          <Text style={styles.name}>Abhishek Garg</Text>
          <Text style={styles.color}>abhishek.garg@successive.tech</Text>
        </View>
      </View>

      <ItemSeperatorMain />

      <Text style={styles.text}>MANAGE ACCOUNT</Text>

      <View style={styles.lowerPart}>
        <Button
          name="External3"
          item={<View style={styles.Block}>
            <Image source={require('../../assets/profile.png')} style={styles.icon} />
            <Text style={styles.IconName}>Profile</Text>
          </View>} navigation={navigation} />

        <ItemSeperator />

        <Button
          name="External2"
          item={<View style={styles.Block}>
            <Image source={require('../../assets/padlock.png')} style={styles.icon} />
            <Text style={styles.IconName}>Change Password </Text>
          </View>} navigation={navigation} />

        <ItemSeperator />

        <Button
          name="External4"
          item={<View style={styles.Block}>
            <Image source={require('../../assets/communication.png')} style={styles.icon} />
            <Text style={styles.IconName}>Communication Preferences</Text>
          </View>} navigation={navigation} />

        <ItemSeperator />

        <Button
          item={<View style={styles.Block}>
            <Image source={require('../../assets/translate.png')} style={styles.icon} />
            <Text style={styles.IconName}>Change Language</Text>
          </View>} navigation={navigation} name={undefined} />

        <ItemSeperator />

        <Button
          item={<View style={styles.Block}>
            <Image source={require('../../assets/logout.png')} style={styles.icon} />
            <Text style={styles.IconName}>Sign Out</Text>
          </View>} navigation={navigation} name={undefined} />

        <ItemSeperator />

      </View>

    </ScrollView>
  );
};

export default SettingsScreen;