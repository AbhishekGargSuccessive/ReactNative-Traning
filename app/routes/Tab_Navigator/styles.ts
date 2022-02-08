import {StyleSheet} from 'react-native';
import {FONTS, SIZES} from '../../constants';

const styles = StyleSheet.create({
  tabBarstyle: {
    paddingHorizontal: 30,
    paddingTop: 5,
    paddingBottom: 5,
  },
  tabBarContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 2,
    height: '100%',
    borderRadius: SIZES.radius,
  },
  tabBarIcon: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
  },
  tabBarIconText: {
    paddingLeft: 4,
    ...FONTS.h3,
  },
});

export default styles;
