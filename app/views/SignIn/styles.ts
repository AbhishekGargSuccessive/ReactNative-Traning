import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  marginContainer: {
    flex: 1,
    marginHorizontal: 20,
  },
  SigninText: {
    color: COLORS.black,
    fontSize: SIZES.body2,
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
  },
  WelcomeText: {
    textAlign: 'center',
    fontSize: SIZES.body3,
    color: COLORS.transparentBlack7,
    fontFamily: 'Poppins-Regular',
  },
  ScrollContainer: {
    flex: 1,
    marginVertical: '5%',
  },
  SwitchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  SwitchDirection: {
    flexDirection: 'row',
  },
  ForgotText: {
    fontSize: SIZES.body4,
    color: COLORS.gray,
    fontFamily: 'Poppins-Regular',
    alignSelf: 'center',
  },
  SignInButton: {
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 12,
    marginVertical: '5%',
  },
  SignInButtonText: {
    color: COLORS.white,
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
  },
  TextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  SignUpText: {
    color: COLORS.primary,
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
  },
  socialContainer: {
    paddingTop: 40,
  },
  facebookButton: {
    backgroundColor: COLORS.blue,
    paddingVertical: 10,
    borderRadius: 12,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: '5%',
  },
  icons: {
    height: 22,
    width: 22,
    resizeMode: 'contain',
    marginRight: 10,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  facebookButtonText: {
    color: COLORS.white,
    fontSize: SIZES.body3,
    fontFamily: 'Poppins-Regular',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  GoogleButton: {
    backgroundColor: COLORS.lightGray2,
    paddingVertical: 10,
    borderRadius: 12,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  GoogleButtonText: {
    color: COLORS.black,
    fontSize: SIZES.body3,
    fontFamily: 'Poppins-Regular',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
export default styles;
