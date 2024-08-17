import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WithdrawScreen from './WithdrawScreen';
import DepositScreen from './DepositScreen';
import ConfirmTransaction from './ConfirmTransaction';
import TransferSuccessScreen from './TransferSuccessScreen';

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Withdraw" component={WithdrawScreen} />
      <Stack.Screen name="Deposit" component={DepositScreen} />
      <Stack.Screen name="ConfirmTransaction" component={ConfirmTransaction} />
      <Stack.Screen name="Success" component={TransferSuccessScreen} />
    </Stack.Navigator>
  );
}
