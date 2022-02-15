import React from 'react';
import {Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {COLORS, constants, icons} from '../../constants';
import styles from './styles';

interface RenderProps {
  item: {
    icon: any;
    name: string;
    date_time: string;
    items: string;
    order_delivered: boolean;
    price: string;
  };
  select: boolean;
}

const RenderItems = (props: RenderProps) => {
  const {item, select} = props;
  return (
    <View style={styles.renderContainer}>
      <View style={styles.directionContainer}>
        <View style={styles.innerContainer}>
          <View style={styles.iconContainer}>
            <Image source={item.icon} style={styles.Icon} />
          </View>
          <View style={{marginLeft: 10}}>
            <Text style={styles.nameText}>{item.name}</Text>
            <View style={styles.datetimeContainer}>
              <Text style={styles.datetimeText}>{item.date_time}</Text>
              <Image source={icons.dot} style={styles.DotIcon} />
              <Text style={styles.datetimeText}>  {item.items}</Text>
            </View>
            <View style={styles.orderContainer}>
              <Image
                source={icons.dot}
                style={[
                  styles.orderDot,
                  {tintColor: item.order_delivered ? COLORS.green : COLORS.red},
                ]}
              />
              <Text
                style={[
                  {color: item.order_delivered ? COLORS.green : COLORS.red},
                  styles.orderText,
                ]}>
                {item.order_delivered
                  ? constants.keywords.Order_Delivered
                  : constants.keywords.Order_Cancelled}
              </Text>
            </View>
          </View>
        </View>
        <Text style={styles.priceText}>{item.price}</Text>
      </View>
      <View style={styles.NewButtonContainer}>
        <TouchableOpacity style={styles.ReOrderButton}>
          <Text style={styles.ReOrderButtonText}>
            {constants.keywords.Re_Order}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.RateButton}>
          <Text style={styles.RateButtonText}>{constants.keywords.Rate}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RenderItems;
