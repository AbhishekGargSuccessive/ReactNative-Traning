import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../constants';

const styles = StyleSheet.create({
  container: {
    marginVertical: 14,
  },
  textcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  PasswordText: {
    color: COLORS.gray,
    fontSize: SIZES.body4,
    paddingVertical: 6,
    fontFamily: 'Poppins-Regular',
  },
  invalidText: {
    color: 'red',
    fontSize: SIZES.body4,
    fontFamily: 'Poppins-Regular',
  },
  InputContainer: {
    backgroundColor: COLORS.lightGray2,
    borderRadius: 12,
    paddingRight: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  InputText: {
    width: '92%',
    paddingHorizontal: 10,
    paddingVertical: 12,
    color: COLORS.black,
    fontSize: SIZES.body4,
    fontFamily: 'Poppins-Regular',
  },
  icon: {
    resizeMode: 'contain',
    alignSelf: 'center',
    justifyContent: 'center',
    height: 20,
    width: 20,
    tintColor: COLORS.gray,
  },
});

export default styles;
