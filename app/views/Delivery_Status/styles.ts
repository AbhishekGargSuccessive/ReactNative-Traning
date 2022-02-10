import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  marginConatiner: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  EstimatedText: {
    color: COLORS.gray2,
    textAlign: 'center',
    ...FONTS.body3,
  },
  DateText: {
    color: COLORS.black,
    textAlign: 'center',
    ...FONTS.h2,
  },
  RadiusContainer: {
    backgroundColor: COLORS.lightGray2,
    borderWidth: 1,
    borderColor: COLORS.lightGray1,
    borderRadius: SIZES.radius,
    marginVertical: 10,
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: COLORS.lightGray1,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  trackOrderText: {
    color: COLORS.black,
    ...FONTS.h3,
  },
  IDText: {
    color: COLORS.gray,
    ...FONTS.body3,
  },
  flatList: {
    marginVertical: 15,
  },
  renderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  tickIcon: {
    resizeMode: 'contain',
    height: 40,
    width: 40,
  },
  renderInnerContainer: {
    marginHorizontal: 20,
    marginTop: -20,
  },
  dottedLine: {
    height: 30,
    width: 3,
    alignSelf: 'center',
    tintColor: COLORS.gray2,
  },
  DoneButton: {
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: SIZES.radius,
    marginVertical: '36%',
  },
  DoneButtonText: {
    color: COLORS.white,
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
  },
});

export default styles;
