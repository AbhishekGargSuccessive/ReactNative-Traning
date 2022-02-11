import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  marginContainer: {
    marginHorizontal: 20,
  },
  ButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  Button: {
    width: '47%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: SIZES.radius,
    borderRadius: SIZES.radius,
  },
  ButtonText: {
    ...FONTS.h3,
  },
  renderContainer: {
    backgroundColor: COLORS.lightGray2,
    justifyContent: 'space-evenly',
    borderRadius: SIZES.radius,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    padding: 10,
  },
  logo: {
    height: 80,
    width: 80,
    resizeMode: 'contain',
  },
  nameText: {
    color: COLORS.gray,
    ...FONTS.body3,
  },
  discountText: {
    color: COLORS.black,
    ...FONTS.h2,
  },
  validText: {
    color: COLORS.gray,
    ...FONTS.body4,
  },
});
export default styles;
