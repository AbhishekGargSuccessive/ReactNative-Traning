import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';

const styles = StyleSheet.create({
  colorcontainer: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  marginContainer: {
    marginHorizontal: 20,
  },
  Container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  backButtonContainer: {
    borderRadius: SIZES.radius,
    borderWidth: 1,
    height: 40,
    width: 40,
    borderColor: COLORS.gray2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIcon: {
    tintColor: COLORS.gray2,
    width: 25,
    height: 25,
  },
  HeaderText: {
    fontSize: 18,
    color: COLORS.black,
    fontFamily: 'Poppins-SemiBold',
  },
  editButtonText: {
    fontSize: 18,
    color: COLORS.primary,
    fontFamily: 'Poppins-SemiBold',
  },
  flatListContainer: {
    backgroundColor: COLORS.lightGray2,
    borderRadius: SIZES.radius,
    marginVertical: 10,
  },
  renderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  TitleText: {
    color: COLORS.gray,
    paddingVertical: 10,
    ...FONTS.body3,
  },
  ValueText: {
    color: COLORS.black,
    paddingVertical: 10,
    ...FONTS.body3,
  },
  lineContainer: {
    borderBottomWidth: 1,
    borderColor: COLORS.lightGray1,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
});
export default styles;
