import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';

const styles = StyleSheet.create({
  backcontainer: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  FoodContainer: {
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.lightGray2,
    paddingHorizontal: 10,
    marginVertical: 20,
    height: '32%',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  caloriesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  caloriesIcon: {
    width: 40,
    height: 40,
    alignSelf: 'center',
    marginTop: 5,
  },
  caloriesText: {
    color: COLORS.gray,
    ...FONTS.body4,
  },
  loveIcon: {
    width: 22,
    height: 22,
    alignSelf: 'center',
    tintColor: COLORS.red,
    marginRight: 8,
  },
  burgerIcon: {
    width: 180,
    height: 180,
    alignSelf: 'center',
  },

  burgerText: {
    textAlign: 'justify',
    color: COLORS.transparentBlack7,
    ...FONTS.body3,
  },
  foodNameText: {
    color: COLORS.black,
    ...FONTS.h1,
    marginVertical: 10,
  },
  midContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  ratingContainer: {
    padding: 10,
    flexDirection: 'row',
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SIZES.radius,
    paddingHorizontal: SIZES.radius,
  },
  starIcon: {
    height: 22,
    width: 22,
  },
  starText: {
    color: COLORS.white,
    paddingLeft: 10,
    ...FONTS.body3,
  },
  clockContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  ClockIcon: {
    height: 22,
    width: 22,
    marginLeft: SIZES.base,
    resizeMode: 'contain',
  },
  minText: {
    color: COLORS.black,
    paddingLeft: 10,
    ...FONTS.body3,
  },
  sizeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  sizeText: {
    color: COLORS.black,
    ...FONTS.h3,
  },
  sizeRenderContainer: {
    height: 50,
    width: 50,
    borderRadius: SIZES.radius,
    borderWidth: 1,
    marginHorizontal: 14,
    borderColor: COLORS.gray2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemText: {
    ...FONTS.body2,
  },
  profileContainer: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: COLORS.lightGray1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    marginVertical: 20,
  },
  profileIcon: {
    height: 40,
    width: 40,
    borderRadius: SIZES.radius,
  },
  NameContainer: {
    marginHorizontal: 10,
  },
  nameText: {
    color: COLORS.black,
    ...FONTS.h3,
  },
  goldStarIcon: {
    tintColor: COLORS.golden,
    resizeMode: 'contain',
    height: 20,
    width: 20,
    marginLeft: 7,
  },
  buynowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.lightGray2,
    borderRadius: SIZES.radius,
    justifyContent: 'space-between',
    width: '30%',
    paddingVertical: 12,
    marginHorizontal: 36,
    padding: 10,
  },
  CounterIcons: {
    resizeMode: 'contain',
    height: 22,
    width: 22,
    tintColor: COLORS.primary,
  },
  counterText: {
    color: COLORS.black,
    ...FONTS.h2,
  },
  buyButton: {
    justifyContent: 'space-between',
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.radius,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    padding: 10,
    width: '44%',
  },
  buyNowText: {
    color: COLORS.white,
    ...FONTS.h3,
  },
});

export default styles;
