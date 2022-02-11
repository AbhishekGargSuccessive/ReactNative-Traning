import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  marignContainer: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
  RenderVerticalContainer: {
    marginVertical: 10,
  },
  renderContainer: {
    justifyContent: 'space-between',
    backgroundColor: COLORS.lightGray2,
    borderRadius: SIZES.radius,
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 20,
  },
  innerRenderContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  notificationIcon: {
    tintColor: COLORS.primary,
    resizeMode: 'contain',
    width: 28,
    height: 28,
    marginTop: 5,
  },
  textContainer: {
    paddingHorizontal: 10,
  },
  nameText: {
    color: COLORS.black,
    ...FONTS.h3,
  },
  descriptionText: {
    color: COLORS.gray,
    ...FONTS.body4,
  },
});

export default styles;
