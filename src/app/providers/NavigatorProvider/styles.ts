import {StyleSheet} from 'react-native';
import {colors} from '../../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scene: {
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
    backgroundColor: colors.transparent,
  },
  stack: {
    flex: 1,
    shadowColor: colors.white,
    marginTop: 50,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 5,
    overflow: 'hidden',
  },
  drawerStyles: {
    flex: 1,
    marginLeft: 30,
    marginTop: 30,
  },
  drawerStyle: {
    flex: 1,
    backgroundColor: colors.primary,
    borderTopLeftRadius: 40,
  },
  menu: {
    width: 38,
    height: 38,
    margin: 20,
  },
  drawerLblStyle: {
    fontWeight: '500',
    fontSize: 20,
    color: colors.white,
  },
  drawerLblActiveStyle: {
    color: colors.fire(),
  },
  drawerActiveContainerStyle: {
    backgroundColor: colors.fire(0.2),
    borderRadius: 12,
  },
  drawerTitleStyle: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 26,
    marginLeft: 50,
  },
  drawerDivider: {
    backgroundColor: colors.grayTransparent,
    width: '70%',
    height: 1,
    marginVertical: 50,
  },
});

export default styles;
