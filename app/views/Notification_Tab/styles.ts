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
  TitleText: {
    color: COLORS.black,
    paddingTop: 10,
    ...FONTS.h3,
  },
  renderContainer: {
    backgroundColor: COLORS.lightGray2,
    borderRadius: SIZES.radius,
    flexDirection: 'row',
    marginVertical: 5,
    padding: 10,
  },
  innerRenderContainer: {
    flexDirection: 'row',
  },
  IconContainer: {
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.radius,
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
  },
  icon: {
    resizeMode: 'contain',
    height: 36,
    width: 36,
  },
  threeDots: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    tintColor: COLORS.black,
    marginTop: 5,
  },
  renderTextContainer: {
    marginLeft: 10,
    width: '75%',
  },
  nameText: {
    fontFamily: 'Poppins-SemiBold',
    color: COLORS.black,
    fontSize: 18,
  },
  descriptionText: {
    color: COLORS.gray,
    ...FONTS.body4,
  },
  TimeText: {
    color: COLORS.black,
    ...FONTS.body5,
  },
});

export default styles;
