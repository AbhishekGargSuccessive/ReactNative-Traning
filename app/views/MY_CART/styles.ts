import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  swipeListContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  renderContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.lightGray2,
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: SIZES.radius,
  },
  renderInnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  foodIcon: {
    height: 80,
    width: 100,
    resizeMode: 'contain',
    marginTop: 15,
  },
  nameText: {
    color: COLORS.black,
    ...FONTS.body3,
  },
  priceText: {
    color: COLORS.primary,
    ...FONTS.h3,
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radius,
    justifyContent: 'space-between',
    width: '30%',
    marginHorizontal: 20,
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
  renderHiddenItem: {
    flexDirection: 'row',
    backgroundColor: COLORS.primary,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginVertical: 10,
    height: '80%',
    borderRadius: SIZES.radius,
  },
  deleteIcon: {
    resizeMode: 'contain',
    height: 28,
    width: 28,
    marginRight: 20,
  },

  //MODAL STYLE

  modalContainer: {
    backgroundColor: COLORS.lightGray2,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingTop: 20,
    marginVertical: '20%',
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
