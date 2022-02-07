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
  midContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  Images: {
    height: '80%',
    width: '46%',
    resizeMode: 'contain',
  },
  congratulationText: {
    color: COLORS.black,
    marginTop: '-34%',
    ...FONTS.h1,
  },
  text: {
    color: COLORS.gray,
    ...FONTS.body3,
  },

  DoneButton: {
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: SIZES.radius,
    marginVertical: '30%',
  },
  DoneButtonText: {
    color: COLORS.white,
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
  },
});

export default styles;
