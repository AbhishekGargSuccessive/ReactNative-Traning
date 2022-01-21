import React from 'react';
import { View, Text, ScrollView, Image, } from 'react-native';
import Button from '../../components/Button/Button';
import styles from '../SettingsScreen/styles'
import { ItemSeperator } from '../../components/ItemSeperator/ItemSeperator'
import ItemSeperatorMain from '../../components/ItemSeperator/ItemSeperator';
import { useOrientation } from '../../config/orientation'
import { Constant, Icons } from '../../config';

interface SettingsProps {
  navigation: any
}

const SettingsScreen = (props: SettingsProps) => {
  const { navigation } = props;
  const o = useOrientation()

  return (
    <ScrollView style={styles(o).container}>

      <View style={styles(o).Upper}>
        <Image source={Icons.user_avatar} style={styles(o).Profile} />
        <View style={styles(o).identity}>
          <Text style={styles(o).name}>{Constant.user_name}</Text>
          <Text style={styles(o).color}>{Constant.email_id}</Text>
        </View>
      </View>

      <ItemSeperatorMain />

      <Text style={styles(o).text}>{Constant.MANAGE_ACCOUNT}</Text>

      <View style={styles(o).lowerPart}>
        <Button
          name="Profile"
          item={<View style={styles(o).Block}>
            <Image source={Icons.profile} style={styles(o).icon} />
            <Text style={styles(o).IconName}>{Constant.Profile}</Text>
          </View>} navigation={navigation} disabled={undefined} />

        <ItemSeperator />

        <Button
          name="ChangePassword"
          item={<View style={styles(o).Block}>
            <Image source={Icons.padlock} style={styles(o).icon} />
            <Text style={styles(o).IconName}>{Constant.Change_Password}</Text>
          </View>} navigation={navigation} disabled={undefined} />

        <ItemSeperator />

        <Button
          name="Communication"
          item={<View style={styles(o).Block}>
            <Image source={Icons.padlock} style={styles(o).icon} />
            <Text style={styles(o).IconName}>{Constant.Communication_Preference}</Text>
          </View>} navigation={navigation} disabled={undefined} />

        <ItemSeperator />

        <Button
          item={<View style={styles(o).Block}>
            <Image source={Icons.translate} style={styles(o).icon} />
            <Text style={styles(o).IconName}>{Constant.Change_Language}</Text>
          </View>} navigation={navigation} name={false} disabled={true} />

        <ItemSeperator />

        <Button
          item={<View style={styles(o).Block}>
            <Image source={Icons.logout} style={styles(o).icon} />
            <Text style={styles(o).IconName}>{Constant.Sign_Out}</Text>
          </View>} navigation={navigation} name={false} disabled={true} />

        <ItemSeperator />

      </View>

    </ScrollView>
  );
};

export default SettingsScreen;