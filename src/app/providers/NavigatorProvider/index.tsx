import React from 'react';
import {View, Text} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import Animated from 'react-native-reanimated';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../../screens/HomeScreen';
import FavoritesScreen from '../../screens/FavoritesScreen';
import OrdersScreen from '../../screens/OrdersScreen';
import CartScreen from '../../screens/CartScreen';
import SignOutScreen from '../../screens/SignOutScreen';
import styles from './styles';
import DrawerHeader from '../../../components/ui/molecules/DrawerHeader';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const DrawerDivider = () => <View style={styles.drawerDivider} />;

const ScreenHeader = () => null;

const DrawerContent = (props: any) => {
  return (
    <DrawerContentScrollView
      {...props}
      style={styles.drawerStyles}
      scrollEnabled={false}>
      <Text style={styles.drawerTitleStyle}>BEKA</Text>
      {[
        {
          label: 'Start',
          onPress: () => props.navigation.navigate('HomeScreen'),
        },
        {
          label: 'Your Cart',
          onPress: () => props.navigation.navigate('CartScreen'),
        },
        {
          label: 'Favourites',
          onPress: () => props.navigation.navigate('FavoritesScreen'),
        },
        {
          label: 'Your Orders',
          onPress: () => props.navigation.navigate('OrdersScreen'),
        },
      ].map(({label, onPress}) => (
        <DrawerItem
          key={label}
          label={label}
          labelStyle={styles.drawerLblStyle}
          onPress={onPress}
        />
      ))}
      <DrawerDivider />
      <DrawerItem
        label="Sign Out"
        labelStyle={styles.drawerLblStyle}
        onPress={() => props.navigation.navigate('SignOutScreen')}
      />
    </DrawerContentScrollView>
  );
};

const defaultScreenOptions = {
  headerTransparent: true,
  headerTitle: '',
  headerLeft: DrawerHeader,
};

const Screens = ({style}: any) => {
  return (
    <Animated.View style={[styles.stack, style]}>
      <Stack.Navigator screenOptions={defaultScreenOptions}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="FavoritesScreen" component={FavoritesScreen} />
        <Stack.Screen name="OrdersScreen" component={OrdersScreen} />
        <Stack.Screen name="CartScreen" component={CartScreen} />
        <Stack.Screen name="SignOutScreen" component={SignOutScreen} />
      </Stack.Navigator>
    </Animated.View>
  );
};

const NavigatorProvider = ({children}: any) => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          header: ScreenHeader,
          drawerStyle: styles.drawerStyle,
          drawerActiveBackgroundColor: 'red',
        }}
        backBehavior="none"
        drawerContent={DrawerContent}>
        <Drawer.Screen name="Screens" children={Screens} />
      </Drawer.Navigator>
      {children}
    </NavigationContainer>
  );
};
export default NavigatorProvider;
