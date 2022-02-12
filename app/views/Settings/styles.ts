import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  FlatlistContainer: {
    backgroundColor: COLORS.lightGray2,
    borderRadius: SIZES.radius,
    marginHorizontal: 20,
    marginVertical: 16,
  },
  renderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    paddingVertical: 20,
    paddingLeft: 10,
  },
  Icon: {
    tintColor: COLORS.primary,
    resizeMode: 'contain',
    width: 20,
    height: 20,
  },
  NameText: {
    color: COLORS.black,
    ...FONTS.body3,
    paddingLeft: 20,
  },
  line: {
    borderBottomWidth: 2,
    width: '82%',
    marginHorizontal: 30,
    borderColor: COLORS.lightGray1,
  },
});

export default styles;
