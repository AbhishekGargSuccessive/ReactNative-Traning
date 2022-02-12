import React from 'react';
import SettingScreen from '../views/Settings';

interface SettingsProps {
  navigation: any;
}

const SettingsModel = (props: SettingsProps) => {
  const {navigation} = props;
  return <SettingScreen navigation={navigation} />;
};

export default SettingsModel;
