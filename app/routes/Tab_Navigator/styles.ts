import {StyleSheet} from 'react-native';
import {FONTS, SIZES} from '../../constants';

const styles = StyleSheet.create({
  tabBarstyle: {
    paddingHorizontal: 22,
    height: 72,
    borderTopRightRadius: 22,
    borderTopLeftRadius: 22,
  },
  tabBarContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 2,
    height: '70%',
    borderRadius: 24,
  },
  tabBarIcon: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  tabBarIconText: {
    paddingLeft: 2,
    ...FONTS.h4,
  },
});

export default styles;
