import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Home from '../../src/containers/Home';
import Register from '../containers/signUp';
import { Dimensions } from 'react-native';
import { colors } from '../../src/constants/colors';
const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  const [screenWidth, setScreenWidth] = useState(Dimensions.get('window').width);
  const [screenHeight, setScreenHeight] = useState(Dimensions.get('window').height);
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.blue,
        tabBarInactiveTintColor:colors.gray,
        tabBarLabelStyle: { fontSize: 10 },
        tabBarItemStyle: { width: 50, },
        tabBarStyle: {
          height: screenHeight/13,
          width:screenWidth,
          backgroundColor: 'white',
          justifyContent:'center',alignItems:'center'
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={({ navigation }) => ({
          tabBarLabel :"Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={colors.black} />
          ),
        })}
      />
      <Tab.Screen
        name="Categories"
        component={Register}
        options={{
          tabBarLabel: 'Categories',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="category" size={size}  color={colors.black} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Home}
        options={{
          tabBarLabel: 'Notifications',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="notifications-none" size={size}  color={colors.black} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Register}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-circle-outline" size={size}  color={colors.black} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Register}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="shoppingcart" size={size}  color={colors.black} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
