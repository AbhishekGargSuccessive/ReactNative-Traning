import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../constant/Theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  marginContainer: {
    flex: 1,
    marginHorizontal: 20,
    justifyContent: 'center',
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
});
export default styles;
