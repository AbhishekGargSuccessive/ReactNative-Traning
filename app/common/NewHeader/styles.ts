import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';

const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    alignItems: 'center',
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
    fontSize: 18,
    color: COLORS.black,
    fontFamily: 'Poppins-SemiBold',
    alignItems: 'center',
    marginLeft: '25%',
  },
});
export default styles;
