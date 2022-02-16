import React from 'react';
import EditAccountScreen from '../views/Edit_Account';

interface EditProps {
  navigation: any;
}

const EditAccountModel = (props: EditProps) => {
  const {navigation} = props;
  return <EditAccountScreen navigation={navigation} />;
};

export default EditAccountModel;
