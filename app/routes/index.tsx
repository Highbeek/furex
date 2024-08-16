import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import BottomTabBarNavigator from './AppNavigator';
import HomeStack from 'app/screens/dashboard';

const Stack = createNativeStackNavigator();

const AppNavigator: React.FC<any> = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="TabScreens"
        component={BottomTabBarNavigator}
        options={{
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name="Home"
        component={HomeStack}
        options={{
          gestureEnabled: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
