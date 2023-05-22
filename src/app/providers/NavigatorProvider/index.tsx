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
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import HomeScreen from '../../screens/HomeScreen';
import FavoritesScreen from '../../screens/FavoritesScreen';
import OrdersScreen from '../../screens/OrdersScreen';
import CartScreen from '../../screens/CartScreen';
import styles from './styles';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ContactScreen from '../../screens/ContactScreen';
import Animated from 'react-native-reanimated';
import {
  useMarginTopAnimation,
  useScreenRotateAnimationStyle,
} from '../../../theme/animations';
import SignOutScreen from '../../screens/SignOutScreen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const DrawerDivider = () => <View style={styles.drawerDivider} />;

const ScreenHeader = () => null;

const defaultDrawerNavOptions: DrawerNavigationOptions = {
  headerShown: false,
  drawerStyle: styles.drawerStyle,
  drawerContentContainerStyle: {
    backgroundColor: 'transparent',
  },
  drawerContentStyle: {
    backgroundColor: 'transparent',
  },
  overlayColor: 'transparent',
  drawerType: 'back',
  sceneContainerStyle: {
    backgroundColor: 'transparent',
    // borderColor: 'red',
    // borderWidth: 1,
  },
};

const screenList = [
  {
    label: 'Start',
    name: 'HomeScreen',
    component: HomeScreen,
    listInDrawer: true,
  },
  {
    label: 'Your Cart',
    name: 'CartScreen',
    component: CartScreen,
    listInDrawer: true,
  },
  {
    label: 'Favourites',
    name: 'FavoritesScreen',
    component: FavoritesScreen,
    listInDrawer: true,
  },
  {
    label: 'Your Orders',
    name: 'OrdersScreen',
    component: OrdersScreen,
    listInDrawer: true,
  },
  {
    label: '',
    name: 'SignOutScreen',
    component: SignOutScreen,
    listInDrawer: false,
  },
];

const DrawerContent = (props: DrawerContentComponentProps) => {
  const navigation = useNavigation();
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={[styles.drawerContentContainerStyles]}
      scrollEnabled={false}>
      <Text style={styles.drawerTitleStyle}>BEKA</Text>
      {screenList
        .filter(({listInDrawer}) => listInDrawer)
        .map(({label, name}) => {
          return (
            <DrawerItem
              key={label}
              label={label}
              labelStyle={[
                styles.drawerLblStyle,
                navigation?.getCurrentRoute?.()?.name === name &&
                  styles.drawerLblActiveStyle,
              ]}
              style={[
                navigation?.getCurrentRoute?.()?.name === name &&
                  styles.drawerActiveContainerStyle,
              ]}
              onPress={() => props.navigation.navigate(name)}
            />
          );
        })}
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
    <Stack.Navigator
      screenOptions={{
        header: ScreenHeader,
      }}>
      {screenList.map(({name, component}) => (
        <Stack.Screen key={name} name={name} component={component} />
      ))}
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  const navigation = useNavigation();
  const [animaatedRotStyle, slideInRot, slideOutRot]: any =
    useScreenRotateAnimationStyle();

  const navigationHasChanged = React.useCallback(() => {
    const drawerIsOpen =
      navigation.getState()?.history?.find?.(({type}) => type === 'drawer') !==
      undefined;

    if (drawerIsOpen) {
      slideInRot();
    } else {
      slideOutRot();
    }
  }, [navigation, slideInRot, slideOutRot]);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('state', navigationHasChanged);

    return unsubscribe;
  }, [navigation, navigationHasChanged]);

  return (
    <Animated.View
      style={[
        {
          flex: 1,
          borderRadius: 20,
          // backgroundColor: 'red',
          // borderColor: 'blue',
          // borderWidth: 1,
          zIndex: 2,
        },
        animaatedRotStyle,
      ]}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Tab.Screen name="HomeStack" component={HomeStack} />
        <Tab.Screen name="Contact" component={ContactScreen} />
      </Tab.Navigator>
    </Animated.View>
  );
};

const DrawerNavigator = () => {
  const navigation = useNavigation();
  const [animatedStyle, slideIn, slideOut]: any = useMarginTopAnimation();

  const navigationHasChanged = React.useCallback(() => {
    const drawerIsOpen =
      navigation.getState()?.history?.find?.(({type}) => type === 'drawer') !==
      undefined;

    if (drawerIsOpen) {
      slideIn();
    } else {
      slideOut();
    }
  }, [navigation, slideIn, slideOut]);
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('state', navigationHasChanged);

    return unsubscribe;
  }, [navigation, navigationHasChanged]);
  return (
    <Animated.View style={[styles.drawerStyle, animatedStyle]}>
      <Drawer.Navigator
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
