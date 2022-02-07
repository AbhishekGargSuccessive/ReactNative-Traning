import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  marginContainer: {
    marginHorizontal: 20,
    marginVertical: '5%',
    flex: 1,
  },
  renderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: COLORS.lightGray2,
    borderRadius: SIZES.radius,
    borderWidth: 2,
    alignItems: 'center',
    padding: 20,
    marginVertical: 6,
  },
  innerRenderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardIconContainer: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radius,
    borderColor: COLORS.lightGray2,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 55,
  },
  CardIcon: {
    // height: 22,
    width: 22,
    resizeMode: 'contain',
  },
  cardText: {
    color: COLORS.black,
    paddingLeft: 10,
    ...FONTS.h3,
  },
  AddText: {
    color: COLORS.black,
    ...FONTS.h3,
    marginVertical: 15,
  },
  CircleContainer: {
    borderWidth: 2,
    borderRadius: 180,
    alignItems: 'center',
    justifyContent: 'center',
    height: 20,
    width: 20,
  },
  checkCircle: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
    // tintColor: COLORS.primary,
  },
  AddButton: {
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: SIZES.radius,
  },
  AddButtonText: {
    color: COLORS.white,
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
  },
});

export default styles;
