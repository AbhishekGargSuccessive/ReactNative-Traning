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
  midContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  riderImage: {
    height: 80,
    width: 90,
    borderRadius: SIZES.radius,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameText: {
    color: COLORS.black,
    ...FONTS.h2,
  },
  deliveryManText: {
    color: COLORS.black,
    paddingTop: 2,
    ...FONTS.body3,
  },
  orderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
  },
  DotIcon: {
    tintColor: COLORS.green,
    height: 10,
    width: 10,
  },
  orderDeliverText: {
    color: COLORS.green,
    ...FONTS.body3,
    paddingLeft: 5,
  },
  rateText: {
    color: COLORS.black,
    ...FONTS.body3,
    paddingTop: 18,
  },
  ratingContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  StarIcon: {
    tintColor: COLORS.orange,
    resizeMode: 'contain',
    marginHorizontal: 4,
    height: 28,
    width: 30,
  },
  addTipText: {
    color: COLORS.black,
    paddingVertical: 10,
    ...FONTS.h3,
  },
  RenderContainer: {
    borderRadius: SIZES.radius,
    borderColor: COLORS.gray2,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
    borderWidth: 1,
    paddingVertical: 14,
    paddingHorizontal: 12,
  },
  itemText: {
    ...FONTS.body3,
  },
  textInput: {
    backgroundColor: COLORS.lightGray2,
    borderRadius: SIZES.radius,
    textAlignVertical: 'top',
    marginVertical: 20,
    height: '30%',
    ...FONTS.body3,
  },
  ButtonContainer: {
    flex: 1,
    marginBottom: 20,
    justifyContent: 'flex-end',
  },
  SubmitButton: {
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: SIZES.radius,
  },
  SubmitButtonText: {
    color: COLORS.white,
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
  },
});

export default styles;
