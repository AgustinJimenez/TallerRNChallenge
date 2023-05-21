import React from 'react';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import MenuIconImg from '../../atoms/MenuItemImg';

const styles = StyleSheet.create({
  menu: {
    width: 38,
    height: 38,
    margin: 20,
  },
});

const DrawerMenu = () => {
  const navigation = useNavigation();

  const openDrawer = () => navigation.dispatch(DrawerActions.openDrawer());
  return (
    <TouchableOpacity onPress={openDrawer}>
      <Image source={MenuIconImg} style={styles.menu} />
    </TouchableOpacity>
  );
};

export default DrawerMenu;
