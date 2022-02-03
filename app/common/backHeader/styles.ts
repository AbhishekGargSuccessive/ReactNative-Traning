import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';

const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  backButtonContainer: {
    borderRadius: SIZES.radius,
    borderWidth: 1,
    height: 40,
    width: 40,
    borderColor: COLORS.gray2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIcon: {
    tintColor: COLORS.gray2,
    width: 25,
    height: 25,
  },
  HeaderText: {
    fontSize: 20,
    color: COLORS.black,
    fontFamily: 'Poppins-SemiBold',
  },
  cartButtonContainer: {
    backgroundColor: COLORS.pink,
    borderRadius: SIZES.radius,
    padding: 8,
  },
  cartIcon: {
    resizeMode: 'contain',
    height: 25,
    width: 25,
    tintColor: COLORS.black,
  },
});
export default styles;
