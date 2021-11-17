import React from 'react';
import { View, Text, Button, Alert } from 'react-native';
import styles from '../ExploreScreen/styles';

interface ExploreModelProp {
  navigation: any
}

const ExploreScreen = (props: ExploreModelProp) => {
  const navigation = props;
  return (
    <View style={styles.container}>
      <Text>ExploreScreen</Text>
      <Button
        title="Click Here"
        onPress={() => Alert.alert('Button Clicked!')}
      />
    </View>
  );
};

export default ExploreScreen;