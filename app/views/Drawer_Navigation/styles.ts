import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: COLORS.primary,
  },
  closeIcon: {
    height: 28,
    width: 28,
    resizeMode: 'contain',
    tintColor: COLORS.white,
  },
  upperContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  profileIcon: {
    height: 44,
    width: 44,
    borderRadius: SIZES.radius,
  },
  nameText: {
    color: COLORS.white,
    paddingHorizontal: 10,
    ...FONTS.h3,
  },
  profileText: {
    color: COLORS.white,
    paddingHorizontal: 10,
    ...FONTS.body4,
  },
  renderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 10,
  },
  icon: {
    resizeMode: 'contain',
    tintColor: COLORS.white,
    height: 22,
    width: 22,
  },
  iconText: {
    color: COLORS.white,
    paddingHorizontal: 14,
    ...FONTS.h3,
  },
  lineContainer: {
    height: 1,
    width: '70%',
    backgroundColor: COLORS.transparentWhite1,
    marginVertical: 10,
  },
});
export default styles;
