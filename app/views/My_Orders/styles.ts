import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  marginContainer: {
    flex: 1,
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
  SectionListContainer: {
    flex: 1,
  },
  TitleText: {
    color: COLORS.gray,
    paddingVertical: 10,
    ...FONTS.body3,
  },
  renderContainer: {
    backgroundColor: COLORS.lightGray2,
    borderRadius: SIZES.radius,
    marginVertical: 5,
    padding: 10,
  },
  directionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  innerContainer: {
    flexDirection: 'row',
  },
  iconContainer: {
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: SIZES.radius,
    height: 55,
    width: 55,
  },
  Icon: {
    resizeMode: 'contain',
    height: 30,
    width: 30,
  },
  datetimeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameText: {
    color: COLORS.black,
    fontFamily: 'Poppins-Regular',
    fontSize: 22,
    fontWeight: '800',
  },
  datetimeText: {
    color: COLORS.gray,
    ...FONTS.body3,
  },
  DotIcon: {
    height: 6,
    width: 6,
    tintColor: COLORS.gray,
    marginLeft: 10,
  },
  orderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  orderDot: {
    height: 8,
    width: 8,
  },
  orderText: {
    paddingLeft: 5,
    ...FONTS.body3,
  },
  priceText: {
    fontFamily: 'Poppins-Regular',
    color: COLORS.primary,
    fontWeight: '800',
    fontSize: 20,
  },
  NewButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  ReOrderButton: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: '13%',
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.primary,
  },
  ReOrderButtonText: {
    color: COLORS.white,
    ...FONTS.h3,
  },
  RateButton: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: '18%',
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.lightOrange2,
  },
  RateButtonText: {
    color: COLORS.primary,
    ...FONTS.h3,
  },
});

export default styles;
