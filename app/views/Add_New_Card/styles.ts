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
    marginVertical: 10,
  },

  cardImage: {
    resizeMode: 'contain',
    height: 200,
    width: '100%',
  },

  appleIcon: {
    alignSelf: 'flex-end',
    resizeMode: 'contain',
    height: 40,
    width: 40,
    marginRight: 30,
    marginTop: 20,
  },
  cardTextContainer: {
    marginTop: '24%',
    marginHorizontal: 20,
  },
  cardNameText: {
    color: COLORS.white,
    ...FONTS.h3,
  },
  cardText: {
    color: COLORS.white,
    ...FONTS.body3,
  },
  innerCardTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  text: {
    color: COLORS.gray,
    ...FONTS.body3,
  },

  InputContainer: {
    borderRadius: SIZES.radius,
    marginVertical: 10,
    paddingRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.lightGray2,
    alignItems: 'center',
  },

  correctIcon: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
    tintColor: COLORS.green,
  },

  inputText: {
    paddingHorizontal: 18,
    paddingVertical: 14,
    width: '90%',
    ...FONTS.body3,
  },

  midContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  EmailInputContainer: {
    borderRadius: SIZES.radius,
    marginVertical: 10,
    paddingRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.lightGray2,
    alignItems: 'center',
  },

  EmailInputText: {
    paddingHorizontal: 18,
    paddingVertical: 14,
    flexDirection: 'row',
    width: '40%',
    textAlign: 'center',
    ...FONTS.body3,
  },

  rememberContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },

  checkonIcon: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
  },

  rememberText: {
    color: COLORS.gray,
    marginLeft: 10,
    ...FONTS.body3,
  },

  ButtonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  AddButton: {
    backgroundColor: COLORS.primary,
    alignItems: 'center',
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
