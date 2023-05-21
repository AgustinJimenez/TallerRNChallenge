import React from 'react';
import {StyleSheet, View} from 'react-native';
import DrawerMenu from '../DrawerMenu';
import SingleTitle from '../../atoms/SingleTitle';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -20,
  },
});

const TopBar = ({children}: any) => {
  return (
    <View style={styles.container}>
      <DrawerMenu />
      <SingleTitle>{children}</SingleTitle>
    </View>
  );
};
export default TopBar;
