import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';

const styles = StyleSheet.create({
  colorcontainer: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  Container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    // paddingHorizontal: 20
    marginHorizontal: 20,
  },
  menuIcon: {
    borderRadius: SIZES.radius,
    borderWidth: 1,
    height: 40,
    width: 40,
    borderColor: COLORS.gray2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 22,
    color: COLORS.black,
  },
  profileIconRadius: {
    borderRadius: SIZES.radius,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileIcon: {
    height: 40,
    width: 40,
    borderRadius: SIZES.radius,
  },
  searchContainer: {
    backgroundColor: COLORS.lightGray2,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: SIZES.radius,
    paddingHorizontal: SIZES.radius,
  },
  searchInput: {
    flex: 1,
    marginLeft: SIZES.radius,
    ...FONTS.body3,
  },
  searchIcons: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
    tintColor: COLORS.black,
  },
  deliveryContainer: {
    marginHorizontal: SIZES.padding,
    marginTop: SIZES.padding,
  },
  deliveryText: {
    color: COLORS.primary,
    ...FONTS.body3,
  },
  addressConatiner: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: SIZES.base,
  },
  addressText: {
    color: COLORS.black,
    ...FONTS.h3,
  },
  downarrow: {
    height: 20,
    width: 20,
    marginLeft: SIZES.base,
  },
  flatListContainer: {
    marginLeft: 20,
  },
  foodContainer: {
    flexDirection: 'row',
    height: 55,
    marginTop: SIZES.padding,
    alignItems: 'center',
    paddingHorizontal: 8,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.primary,
    marginRight: 10,
  },
  foodIcons: {
    marginTop: 5,
    height: 50,
    width: 50,
  },
  foodText: {
    alignSelf: 'center',
    marginRight: SIZES.base,
    color: COLORS.white,
    ...FONTS.h3,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16,
    marginRight: 20,
  },
  FoodContainer: {
    width: 210,
    padding: SIZES.radius,
    alignItems: 'center',
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.lightGray2,
    marginRight: SIZES.radius,
  },
  LoveContainer: {
    flexDirection: 'row',
  },
  caloriesContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  caloriesIcon: {
    height: 35,
    width: 35,
  },
  caloriesText: {
    color: COLORS.gray,
    ...FONTS.body5,
    marginTop: 4,
  },
  LoveIcon: {
    height: 25,
    width: 25,
    marginRight: 5,
  },
  foodImageContainer: {
    height: 150,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  foodsImages: {
    height: '100%',
    width: '100%',
  },
  foodTextConatiner: {
    alignItems: 'center',
    marginTop: -20,
  },
  burgerText: {
    color: COLORS.black,
    ...FONTS.h3,
  },
  descriptionText: {
    color: COLORS.gray,
    textAlign: 'center',
    ...FONTS.body5,
  },
  priceText: {
    color: COLORS.black,
    marginTop: SIZES.radius,
    ...FONTS.h2,
  },
  FooterContainer: {
    flexDirection: 'row',
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.lightGray2,
    marginRight: SIZES.radius,
    alignItems: 'center',
    width: SIZES.width * 0.92,
  },
  footerfoodsImages: {
    height: 130,
    width: 140,
    marginTop: 30,
    alignItems: 'center',
  },
  footerburgerText: {
    color: COLORS.black,
    ...FONTS.h3,
    fontSize: 17,
  },
  footerdescriptionText: {
    color: COLORS.gray,
    ...FONTS.body4,
  },
  footerpriceText: {
    color: COLORS.black,
    marginTop: SIZES.base,
    ...FONTS.h2,
  },
  footercaloriescontainer: {
    flexDirection: 'row',
    position: 'absolute',
    top: 5,
    right: SIZES.radius,
  },
  //MODAL STYLE
  modalContainer: {
    flex: 1,
    backgroundColor: COLORS.transparentBlack7,
  },
  UpperModal: {
    flex: 0.24,
  },
  modalView: {
    flex: 0.9,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  modalTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  FilterText: {
    color: COLORS.black,
    flex: 1,
    ...FONTS.h3,
    fontSize: 18,
  },
  crossButton: {
    borderColor: COLORS.gray2,
    borderWidth: 2,
    borderRadius: 10,
  },
  crossIcon: {
    tintColor: COLORS.gray2,
    width: 30,
    height: 30,
  },
  distanceText: {
    color: COLORS.black,
    ...FONTS.h3,
    marginTop: SIZES.padding,
  },
  MarkerContainer: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  MarkerCircle: {
    height: 30,
    width: 30,
    borderRadius: 15,
    borderWidth: 4,
    borderColor: COLORS.white,
    backgroundColor: COLORS.primary,
  },
  MarkerText: {
    marginTop: 5,
    color: COLORS.darkGray,
    ...FONTS.body3,
  },
  deliverytimeText: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SIZES.base,
    backgroundColor: COLORS.lightGray2,
    paddingHorizontal: 25,
    paddingVertical: 10,
    marginRight: 10,
    marginTop: 10,
  },
  labelText: {
    color: COLORS.gray,
    ...FONTS.h3,
  },
  ratingContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: SIZES.base,
    backgroundColor: COLORS.lightGray2,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginRight: 10,
    marginTop: 10,
  },
  starIcon: {
    tintColor: COLORS.gray,
    width: 20,
    height: 20,
    marginHorizontal: 6,
    marginRight: 6,
  },
  NextButtonContainer: {
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: SIZES.radius,
    marginTop: 12,
  },
  NextButtonText: {
    color: COLORS.white,
    ...FONTS.h3,
  },
});

export default styles;
