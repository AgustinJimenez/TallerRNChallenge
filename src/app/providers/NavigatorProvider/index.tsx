import React from 'react';
import {View, Text} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerNavigationOptions,
} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../../screens/HomeScreen';
import FavoritesScreen from '../../screens/FavoritesScreen';
import OrdersScreen from '../../screens/OrdersScreen';
import CartScreen from '../../screens/CartScreen';
import SignOutScreen from '../../screens/SignOutScreen';
import styles from './styles';
import DrawerHeader from '../../../components/ui/molecules/DrawerHeader';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ContactScreen from '../../screens/ContactScreen';
import Animated from 'react-native-reanimated';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const DrawerDivider = () => <View style={styles.drawerDivider} />;

const ScreenHeader = () => null;

const defaultDrawerNavOptions: DrawerNavigationOptions = {
  headerTransparent: true,
  headerTitle: '',
  headerLeft: DrawerHeader,
  drawerStyle: styles.drawerStyle,
};

const DrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView
      {...props}
      style={[styles.drawerStyles /* animatedStyle */]}
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
const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{header: ScreenHeader}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="FavoritesScreen" component={FavoritesScreen} />
      <Stack.Screen name="OrdersScreen" component={OrdersScreen} />
      <Stack.Screen name="CartScreen" component={CartScreen} />
      <Stack.Screen name="SignOutScreen" component={SignOutScreen} />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Contact" component={ContactScreen} />
    </Tab.Navigator>
  );
};

const DrawerNavigator = () => {
  return (
    <Animated.View
      style={[
        {
          flex: 1,
        },
      ]}>
      <Drawer.Navigator
        backBehavior="none"
        drawerContent={DrawerContent}
        screenOptions={defaultDrawerNavOptions}>
        <Drawer.Screen name="Home" component={TabNavigator} />
        <Drawer.Screen name="Contact" component={ContactScreen} />
      </Drawer.Navigator>
    </Animated.View>
  );
};

const NavigatorProvider = ({children}: any) => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
      {children}
    </NavigationContainer>
  );
};
export default NavigatorProvider;
