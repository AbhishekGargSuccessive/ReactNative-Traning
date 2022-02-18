import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  marginContainer: {
    backgroundColor: COLORS.lightGray1,
    borderRadius: SIZES.radius,
    marginHorizontal: 20,
    paddingBottom: 10,
  },
  inputContainer: {
    marginHorizontal: 18,
  },
  ButtonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  PasswordButton: {
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.radius,
    marginHorizontal: 20,
    alignItems: 'center',
    paddingVertical: 12,
    marginBottom: 20,
    width: '90%',
  },
  PasswordButtonText: {
    color: COLORS.white,
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
  },
});

export default styles;
