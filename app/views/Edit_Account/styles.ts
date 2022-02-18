import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  marginContainer: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 10,
  },
  RadiusContainer: {
    flex: 1,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.lightGray1,
  },
  textInputContainer: {
    marginHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 20,
  },
  SaveButton: {
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: SIZES.radius,
    marginVertical: 10,
  },
  SaveButtonText: {
    color: COLORS.white,
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
  },
});

export default styles;
