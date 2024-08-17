import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {s} from 'react-native-size-matters';
import {cta} from 'app/assets/constants';
import {TabItem} from 'app/types';
import CrypoScreen from 'app/components/CrypoScreen';
import FiatScreen from 'app/components/FiatScreen';
import Icon from 'react-native-vector-icons/Feather';
import {ngIcon, usd} from 'app/assets/images';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const WalletScreen = ({navigation}) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [toggleBalance, setToggleBalance] = useState<boolean>(false);

  const tabItems: TabItem[] = [
    {
      title: 'Crypto',
      content: <CrypoScreen />,
    },
    {
      title: 'Fiat',
      content: <FiatScreen />,
    },
  ];

  const items = [
    {
      label: 'USD',
      value: 'USD',
      icon: usd,
    },
    {
      label: 'NG',
      value: 'NG',
      icon: ngIcon,
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.balanceHeader}>
          <Text style={styles.totalValue}>Est total value</Text>
          <Icon
            name={toggleBalance ? 'eye' : 'eye-off'}
            size={s(12)}
            onPress={() => setToggleBalance(!toggleBalance)}
            style={styles.eyeIcon}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.value}>
            {toggleBalance ? '24,234.65' : 'xxxxx'}
          </Text>

          <View>
            {items.slice(0, 1).map(item => (
              <TouchableOpacity
                key={item.value}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 2,
                  backgroundColor: '#FFFFFF',
                  borderRadius: 16,
                  paddingHorizontal: 5,
                }}>
                <Image
                  source={item.icon}
                  style={{width: s(10), height: s(10), resizeMode: 'contain'}}
                />
                <Text>{item.label}</Text>
                <MaterialIcons name="arrow-drop-down" size={24} />
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View style={styles.changeContainer}>
          <Text style={styles.change}>-$10.54 (-4.22%)</Text>
          <Text style={styles.changePeriod}>Today</Text>
        </View>
        <View style={styles.cta}>
          {cta.map(action => (
            <TouchableOpacity
              key={action.name} // Unique key prop
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
      <View style={styles.tabCover}>
        <View style={styles.tabContainer}>
          {tabItems.map((tab, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.tab, activeTab === index && styles.activeTab]}
              onPress={() => setActiveTab(index)}>
              <Text
                style={[
                  styles.tabText,
                  {color: activeTab === index ? '#171717' : '#969AA0'},
                ]}>
                {tab.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.tabContent}>{tabItems[activeTab].content}</View>
      </View>
    </View>
  );
};

export default WalletScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3F3',
  },
  header: {
    marginBottom: s(20),
    paddingHorizontal: s(10),
  },
  balanceHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  totalValue: {
    fontFamily: 'Sora',
    fontWeight: '400',
    fontSize: s(14),
    color: '#ABAAAA',
  },
  eyeIcon: {
    paddingLeft: s(10),
  },
  value: {
    fontFamily: 'Sora',
    fontWeight: '700',
    fontSize: 32,
    color: '#171717',
    marginBottom: s(10),
  },
  changeContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: s(20),
    gap: s(10),
  },
  change: {
    fontFamily: 'Sora',
    fontWeight: '400',
    fontSize: s(14),
    color: '#FF0000',
  },
  changePeriod: {
    fontFamily: 'Sora',
    fontWeight: '400',
    fontSize: s(14),
    color: '#ABAAAA',
  },
  cta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ctaContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
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
  tabContainer: {
    borderRadius: s(50),
    paddingHorizontal: s(4),
    paddingVertical: s(4),
    backgroundColor: '#F3F3F3',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: s(20),
  },
  tab: {
    borderRadius: s(50),
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingVertical: s(10),
  },
  tabCover: {
    backgroundColor: '#fff',
    borderTopLeftRadius: s(20),
    borderTopRightRadius: s(20),
    flex: 1,
    paddingTop: s(20),
    paddingHorizontal: s(10),
  },
  activeTab: {
    backgroundColor: '#fff',
  },
  tabText: {
    fontFamily: 'Sora',
    fontSize: s(13),
  },
  tabContent: {
    flex: 1,
    backgroundColor: '#fff',
    borderBottomLeftRadius: s(20),
    borderBottomRightRadius: s(20),
    paddingHorizontal: s(20),
    paddingVertical: s(10),
  },
  icon: {
    width: s(14),
    height: s(14),
    resizeMode: 'contain',
  },
});
