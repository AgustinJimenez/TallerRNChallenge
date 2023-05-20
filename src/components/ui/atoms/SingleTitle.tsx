import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {colors} from '../../../theme';

const styles = StyleSheet.create({
  title: {
    color: colors.lightDark,
    marginHorizontal: '20%',
    marginTop: 5,
    fontWeight: '600',
    fontSize: 23,
  },
});

const SingleTitle = ({children}: any) => {
  return <Text style={styles.title}>{children}</Text>;
};
export default SingleTitle;
