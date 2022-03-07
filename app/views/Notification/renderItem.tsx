import React, {useState} from 'react';
import {Image, SafeAreaView, Switch, Text, View} from 'react-native';
import {COLORS} from '../../constants';
import styles from './stylels';

interface RenderProps {
  item: {
    icon: any;
    name: string;
    description: string;
  };
}

const RenderItems = (props: RenderProps) => {
  const {item} = props;
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <SafeAreaView style={styles.RenderVerticalContainer}>
      <View style={styles.renderContainer}>
        <View style={styles.innerRenderContainer}>
          <Image source={item.icon} style={styles.notificationIcon} />
          <View style={styles.textContainer}>
            <Text style={styles.nameText}>{item.name}</Text>
            <Text style={styles.descriptionText}>{item.description}</Text>
          </View>
        </View>
        <Switch
          trackColor={{false: COLORS.lightGray1, true: COLORS.primary}}
          thumbColor={
            isEnabled
              ? COLORS.primary && COLORS.white
              : COLORS.white && COLORS.gray2
          }
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </SafeAreaView>
  );
};

export default RenderItems;
