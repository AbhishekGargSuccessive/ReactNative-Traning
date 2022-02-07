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
  checkCircle: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
    // tintColor: COLORS.primary,
  },

  payIconContainer: {
    backgroundColor: COLORS.white,

    borderRadius: 10,
    borderColor: COLORS.lightGray1,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    width: 80,
  },
  payIcon: {
    height: 60,
    width: 60,
    resizeMode: 'contain',
  },

  dotContainer: {
    borderWidth: 2,
    borderRadius: 180,
    alignItems: 'center',
    justifyContent: 'center',
    height: 20,
    width: 20,
  },
  dot: {
    height: 10,
    width: 10,
    resizeMode: 'contain',
    tintColor: COLORS.primary,
  },
  titleText: {
    color: COLORS.black,
    marginVertical: 15,
    ...FONTS.h3,
  },
  deliveryAddressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: COLORS.lightGray1,
    borderRadius: SIZES.radius,
    borderWidth: 2,
    padding: 20,
  },
  focusIcon: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
    tintColor: COLORS.black,
  },
  addressText: {
    color: COLORS.black,
    paddingHorizontal: 16,
    ...FONTS.body3,
  },

  couponContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 2,
    paddingRight: 20,
    borderColor: COLORS.lightGray1,
    borderRadius: SIZES.radius,
    width: '100%',
    // height: '30%',
  },
  textInput: {
    color: COLORS.black,
    width: '89.7%',
  },
  discountIconContainer: {
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    borderTopRightRadius: SIZES.radius,
    borderBottomRightRadius: SIZES.radius,
    padding: 10,
    marginTop: -1,
  },
  discountIcon: {
    resizeMode: 'contain',
    height: 34,
    width: 34,
  },

  //MODAL

  modalContainer: {
    backgroundColor: COLORS.lightGray2,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingTop: 20,
    marginVertical: '5%',
  },
  modalInnerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 8,
  },
  totalpriceText: {
    color: COLORS.black,
    ...FONTS.body3,
  },
  priceValueText: {
    color: COLORS.black,
    ...FONTS.h3,
  },
  lineView: {
    borderTopWidth: 1,
    borderColor: COLORS.lightGray1,
    marginVertical: 20,
  },
  modalSecondInnerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  totalText: {
    color: COLORS.black,
    ...FONTS.h2,
  },

  totalValueText: {
    color: COLORS.black,
    ...FONTS.h2,
  },

  OrderButton: {
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: SIZES.radius,
    marginVertical: -10,
  },
  OrderButtonText: {
    color: COLORS.white,
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
  },
});

export default styles;
