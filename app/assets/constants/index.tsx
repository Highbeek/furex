import {
  depositIcon,
  trade,
  withdrawIcon,
  data,
  internet,
  airtime,
  more,
  gift,
  card,
  cable,
  add,
  ngIcon,
  cedis,
  shilling,
  zm,
  xaf,
} from 'app/assets/images';

export const cta = [
  {
    name: 'Deposit',
    icon: depositIcon,
    onPress: () => {},
  },
  {
    name: 'Trade',
    icon: trade,
    onPress: () => {},
  },
  {
    name: 'Withdraw',
    icon: withdrawIcon,
    onPress: () => {},
  },
];

export const bills = [
  {name: 'Data', icon: data},
  {name: 'Cable TV', icon: cable},
  {name: 'Airtime', icon: airtime},
  {name: 'Internet', icon: internet},
  {name: 'Add', icon: add},
];

export const fiats = [
  {
    name: 'Naira',
    code: 'NGN',
    amt: 'NGN00.00',
    bal: '$00.00',
    icon: ngIcon,
  },
  {
    name: 'Cedis',
    code: 'GHS',
    amt: 'GHS00.00',
    bal: '$00.00',
    icon: cedis,
  },
  {
    name: 'Shilling',
    code: 'KEC',
    amt: 'KEC00.00',
    bal: '$00.00',
    icon: shilling,
  },
  {
    name: 'Zambia Kwacha',
    code: 'ZMK',
    amt: 'ZMK00.00',
    bal: '$0.00',
    icon: zm,
  },
  {
    name: 'CFA Franc',
    code: 'XAF',
    amt: 'XAF00.00',
    bal: '$0.00',
    icon: xaf,
  },
];
