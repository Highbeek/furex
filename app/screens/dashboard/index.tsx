import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WithdrawScreen from './WithdrawScreen';

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Withdraw" component={WithdrawScreen} />
    </Stack.Navigator>
  );
}
