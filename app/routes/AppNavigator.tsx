import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {memo} from 'react';
import {s} from 'react-native-size-matters';
import {Image, Text, View} from 'react-native';
import DashboardScreen from 'app/screens/dashboard/DashboardScreen';
import WalletScreen from 'app/screens/wallet/WalletScreen';
import GiftCardScreen from 'app/screens/giftCard/GiftCardScreen';
import CardsScreen from 'app/screens/cards/CardsScreen';
import MoreScreen from 'app/screens/more/MoreScreen';
import {MainNavParamList} from '../types';
import {home, wallet, gift, card, more} from 'app/assets/images';

const MainNav = createBottomTabNavigator<MainNavParamList>();

const TabBarLabel = ({focused, label}: {focused: boolean; label: string}) => (
  <Text
    style={{
      fontFamily: focused ? 'Sora' : 'Sora',
      color: focused ? '#0856AF' : '#ABAAAA',
      fontWeight: focused ? '600' : '400',
      fontSize: s(12),
      marginTop: s(20),
    }}>
    {label}
  </Text>
);

const TabBarIcon = ({focused, icon}: {focused: boolean; icon: any}) => (
  <Image
    source={icon}
    style={{
      width: 24,
      height: 24,
      tintColor: focused ? '#0856AF' : '#ABAAAA',
    }}
  />
);

const BottomNavigator = () => {
  return (
    <MainNav.Navigator
      initialRouteName="HomeTab"
      screenOptions={{
        tabBarStyle: {
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#fff',
          paddingTop: s(16),
          height: s(80),
        },
        tabBarShowLabel: true,
        headerShown: false,
      }}>
      <MainNav.Screen
        name="HomeTab"
        component={DashboardScreen}
        options={{
          tabBarLabel: ({focused}) => (
            <TabBarLabel label="Home" focused={focused} />
          ),
          tabBarIcon: ({focused}) => (
            <TabBarIcon focused={focused} icon={home} />
          ),
        }}
      />

      <MainNav.Screen
        name="WalletTab"
        component={WalletScreen}
        options={{
          tabBarLabel: ({focused}) => (
            <TabBarLabel label="Wallet" focused={focused} />
          ),
          tabBarIcon: ({focused}) => (
            <TabBarIcon focused={focused} icon={wallet} />
          ),
        }}
      />

      <MainNav.Screen
        name="GiftCardTab"
        component={GiftCardScreen}
        options={{
          tabBarLabel: ({focused}) => (
            <TabBarLabel label="Gift Card" focused={focused} />
          ),
          tabBarIcon: ({focused}) => (
            <TabBarIcon focused={focused} icon={gift} />
          ),
        }}
      />

      <MainNav.Screen
        name="CardsTab"
        component={CardsScreen}
        options={{
          tabBarLabel: ({focused}) => (
            <TabBarLabel label="Cards" focused={focused} />
          ),
          tabBarIcon: ({focused}) => (
            <TabBarIcon focused={focused} icon={card} />
          ),
        }}
      />

      <MainNav.Screen
        name="MoreTab"
        component={MoreScreen}
        options={{
          tabBarLabel: ({focused}) => (
            <TabBarLabel label="More" focused={focused} />
          ),
          tabBarIcon: ({focused}) => (
            <TabBarIcon focused={focused} icon={more} />
          ),
        }}
      />
    </MainNav.Navigator>
  );
};

export default memo(BottomNavigator);
