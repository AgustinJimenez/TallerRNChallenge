import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: 'rgba(0, 0, 0, 0.4)',
    marginHorizontal: '20%',
    marginTop: 5,
    fontWeight: '600',
    fontSize: 23,
  },
  menu: {
    width: 38,
    height: 38,
    margin: 20,
  },
});

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>START</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
