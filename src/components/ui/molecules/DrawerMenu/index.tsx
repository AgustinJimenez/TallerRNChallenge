import React from 'react';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {StyleSheet, TouchableOpacity} from 'react-native';
import MenuIcon from '../../atoms/MenuIcon';
import {colors} from '../../../../theme';

const styles = StyleSheet.create({
  menu: {
    width: 38,
    height: 38,
    margin: 20,
    color: colors.lightDark2,
  },
});

const DrawerMenu = () => {
  const navigation = useNavigation();

  const openDrawer = () => navigation.dispatch(DrawerActions.openDrawer());
  return (
    <TouchableOpacity onPress={openDrawer}>
      <MenuIcon size={35} style={styles.menu} />
    </TouchableOpacity>
  );
};

export default DrawerMenu;
