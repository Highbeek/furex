import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {
  dashbg,
  userProfile,
  notification,
  usd,
  ngIcon,
  promo,
  progress,
  right,
  transaction,
} from 'app/assets/images';
import {s} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Feather';
import BillsPayment from 'app/components/BillsPayment';
import {bills, cta} from 'app/assets/constants';
import SvgTransaction from 'app/assets/images/transaction.svg';

const DashboardScreen = ({navigation}) => {
  const [toggleBalance, setToggleBalance] = useState<boolean>(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('USD');
  const [items, setItems] = useState([
    {
      label: 'USD',
      value: 'USD',
      icon: () => <Image source={usd} style={styles.icon} />,
    },
    {
      label: 'NG',
      value: 'NG',
      icon: () => <Image source={ngIcon} style={styles.icon} />,
    },
  ]);

  const transactionHistory = 0;

  return (
    <View style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1, backgroundColor: '#F7F7F7'}}>
        <StatusBar barStyle="light-content" />
        <View style={{flex: 1}}>
          <ImageBackground source={dashbg} style={styles.background}>
            <View style={styles.container}>
              <View style={styles.header}>
                <View style={styles.profile}>
                  <Image source={userProfile} style={styles.img} />
                  <View style={styles.profileTxt}>
                    <Text style={styles.welcomeTxt}>Welcome🫡</Text>
                    <Text style={styles.name}>Furetin</Text>
                  </View>
                </View>
                <TouchableOpacity>
                  <Image source={notification} style={styles.img} />
                </TouchableOpacity>
              </View>
              <View style={styles.balanceContainer}>
                <View>
                  <View style={styles.bal}>
                    <Text style={styles.balanceTitle}>Total Balance</Text>
                    <Icon
                      name={toggleBalance ? 'eye' : 'eye-off'}
                      onPress={() => setToggleBalance(!toggleBalance)}
                    />
                  </View>
                  <Text style={styles.amt}>24,234.65</Text>
                </View>
                <View style={styles.drop}>
                  <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    placeholder="Select Currency"
                    style={styles.dropdownStyle}
                    dropDownContainerStyle={styles.dropdownContainerStyle}
                    labelStyle={styles.dropdownLabelStyle}
                    showArrowIcon={true}
                  />
                </View>
              </View>
              <View style={styles.cta}>
                {cta.map((action, index) => (
                  <TouchableOpacity
                    key={index}
                    style={styles.ctaContainer}
                    onPress={() =>
                      navigation.navigate('Home', {screen: action.name})
                    }>
                    <Image source={action.icon} style={styles.ctaIcon} />
                    <Text style={styles.ctaTxt}>{action.name}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </ImageBackground>

          <View style={styles.contentContainer}>
            <TouchableOpacity style={styles.highlights}>
              <View style={styles.highlightTextContainer}>
                <Image source={progress} style={styles.progress} />
                <Text style={styles.highlightText}>
                  You could enjoy higher transaction limits if you complete your
                  KYC
                </Text>
              </View>

              <Image source={right} style={styles.rightIcon} />
            </TouchableOpacity>
            <ScrollView contentContainerStyle={styles.billContainer} horizontal>
              {bills.map((bill, index) => (
                <BillsPayment
                  key={index}
                  onPress={() => console.log(`${bill.name} pressed`)}
                  icon={bill.icon}
                  label={bill.name}
                />
              ))}
            </ScrollView>
            <View style={styles.ad}>
              <View style={styles.promoTxt}>
                <Text style={styles.promoTitle}>
                  Low on cash but high on crypto?
                </Text>
                <Text style={styles.promoSubTxt}>
                  Your favourite crypto liquidity infrastructure
                </Text>
              </View>

              <Image source={promo} style={styles.promo} />
            </View>
            <View style={styles.transactionHistoryHeader}>
              <Text style={styles.transactionTitle}>Recent Transactions</Text>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 2}}>
                <Text style={styles.transactionSub}>View All</Text>
                <Image
                  source={right}
                  style={[styles.rightIcon, {tintColor: '#969AA0'}]}
                />
              </View>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              {!transactionHistory && (
                <SvgTransaction width={100} height={100} />
              )}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: s(10),
    paddingVertical: s(20),
  },
  background: {
    width: '100%',
    height: 250,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    overflow: 'hidden',
    paddingTop: s(20),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  img: {
    width: s(40),
    height: s(40),
  },
  profile: {
    flexDirection: 'row',
    gap: 5,
  },
  profileTxt: {},
  name: {
    fontFamily: 'Sora',
    fontWeight: '600',
    color: '#fff',
    fontSize: s(16),
  },
  welcomeTxt: {
    fontFamily: 'Sora',
    fontWeight: '400',
    color: '#fff',
    fontSize: s(12),
  },
  balanceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: s(20),
  },
  balanceTitle: {
    fontFamily: 'Sora',
    fontWeight: '400',
    color: '#fff',
    fontSize: s(14),
  },
  bal: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  amt: {
    fontFamily: 'Sora',
    fontWeight: '600',
    color: '#fff',
    fontSize: s(32),
  },
  drop: {
    marginLeft: s(20),
    width: s(120),
    zIndex: 10,
  },
  dropdownStyle: {
    backgroundColor: '#DDF2FE',
    borderRadius: s(50),
    height: s(28),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: s(8),
    borderWidth: 0,
  },
  dropdownContainerStyle: {
    backgroundColor: '#f0f0f0',
    borderWidth: 0,
    zIndex: 50,
  },
  dropdownLabelStyle: {
    fontFamily: 'Sora',
    fontWeight: '400',
    color: '#000',
    fontSize: s(10),
  },
  icon: {
    width: s(14),
    height: s(14),
    resizeMode: 'contain',
  },
  cta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: s(20),
  },
  ctaContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DDF2FE',
    borderRadius: s(50),
    height: s(34),
    marginHorizontal: s(5),
    paddingVertical: s(5),
  },
  ctaIcon: {
    width: s(18),
    height: s(18),
    resizeMode: 'contain',
  },
  ctaTxt: {
    fontFamily: 'Sora',
    fontWeight: '400',
    color: '#000',
    fontSize: s(10),
    marginLeft: s(5),
  },

  contentContainer: {
    flex: 1,
    marginTop: s(20),
    paddingHorizontal: s(16),
    paddingVertical: s(20),
    backgroundColor: '#fff',
    borderRadius: s(10),
    borderTopLeftRadius: s(40),
    borderTopRightRadius: s(40),
  },
  btm: {
    backgroundColor: '#fff',
    borderTopRightRadius: s(20),
    borderTopLeftRadius: s(20),
    marginTop: s(20),
  },
  highlights: {
    backgroundColor: '#DDF2FE',
    borderRadius: s(20),
    height: s(60),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: s(16),
    justifyContent: 'space-between',
  },
  highlightTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: s(8),
    flex: 1,
  },
  highlightText: {
    fontFamily: 'Sora',
    fontWeight: '400',
    color: '#000',
    fontSize: s(12),
    flexShrink: 1,
  },
  progress: {
    width: s(39),
    height: s(39),
    resizeMode: 'contain',
  },
  rightIcon: {
    width: s(16),
    height: s(16),
    marginLeft: s(8),
  },
  billContainer: {
    paddingVertical: s(20),
    gap: s(10),
  },
  ad: {
    backgroundColor: '#DDF2FE',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: s(10),
    borderRadius: s(10),
  },
  promo: {
    width: s(89),
    height: s(89),
    resizeMode: 'center',
  },
  promoTitle: {
    fontFamily: 'Sora',
    fontWeight: '700',
    color: '#000',
    fontSize: s(14),
  },
  promoSubTxt: {
    fontFamily: 'Sora',
    fontWeight: '400',
    color: '#000',
    fontSize: s(12),
  },
  promoTxt: {
    flex: 2,
    gap: s(5),
  },
  transactionHistoryHeader: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: s(20),
  },
  transactionTitle: {
    fontFamily: 'Sora',
    fontWeight: '600',
    color: '#000',
    fontSize: s(16),
  },
  transactionSub: {
    color: '#969AA0',
    fontFamily: 'Sora',
    fontWeight: '500',
    fontSize: s(14),
  },
});
