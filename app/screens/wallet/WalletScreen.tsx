import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {s} from 'react-native-size-matters';
import {cta} from 'app/assets/constants';
import {TabItem} from 'app/types';
import CrypoScreen from 'app/components/CrypoScreen';
import FiatScreen from 'app/components/FiatScreen';

const WalletScreen = ({navigation}) => {
  const [activeTab, setActiveTab] = useState<number>(0);
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

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.totalValue}>Est total value</Text>
        <Text style={styles.value}>24,234.65</Text>
        <View style={styles.changeContainer}>
          <Text style={styles.change}>-$10.54 (-4.22%)</Text>
          <Text style={styles.changePeriod}>Today</Text>
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
  );
};

export default WalletScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: s(20),
  },
  header: {
    marginBottom: s(20),
  },
  totalValue: {
    fontFamily: 'Sora',
    fontWeight: '400',
    fontSize: s(14),
    color: '#ABAAAA',
  },
  value: {
    fontFamily: 'Sora',
    fontWeight: '600',
    fontSize: s(24),
    color: '#171717',
    marginBottom: s(10),
  },
  changeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: s(20),
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
  activeTab: {
    backgroundColor: '#fff',
  },
  tabText: {
    fontFamily: 'Sora',
    fontSize: s(13),
  },
  tabContent: {
    flex: 1,
  },
});
