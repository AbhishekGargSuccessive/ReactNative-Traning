import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  marginContainer: {
    flex: 1,
    marginHorizontal: 20,
  },
  PasswordText: {
    color: COLORS.black,
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
  },
  emailaddressText: {
    textAlign: 'center',
    fontSize: 18,
    color: COLORS.transparentBlack7,
    fontFamily: 'Poppins-Regular',
  },
  inputContainer: {
    marginVertical: '12%',
  },
  ButtonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  SendemailButton: {
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 12,
    marginVertical: 16,
  },
  SendemailButtonText: {
    color: COLORS.white,
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
  },
});
export default styles;
