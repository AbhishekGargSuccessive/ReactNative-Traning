import React from 'react';
import NotificationScreen from '../views/Notification';

interface Props {
  navigation: any;
}

const NotificationModel = (props: Props) => {
  const {navigation} = props;
  return <NotificationScreen navigation={navigation} />;
};

export default NotificationModel;
