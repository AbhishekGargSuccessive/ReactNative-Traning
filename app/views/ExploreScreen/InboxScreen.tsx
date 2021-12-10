import React from 'react';
import { View, Text, Button, Alert } from 'react-native';
import styles from './styles';

interface ExploreModelProp {
  navigation: any
}

const InboxScreen = (props: ExploreModelProp) => {
  const navigation = props;
  return (
    <View style={styles.container}>
      <Text>Inbox</Text>
      <Button
        title="Click Here"
        onPress={() => Alert.alert('Button Clicked!')}
      />
    </View>
  );
};

export default InboxScreen;