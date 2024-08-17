import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {ReactNode, useState} from 'react';
import Layout from 'app/components/Layout';
import {s} from 'react-native-size-matters';
import FurexUser from 'app/components/FurexUser';
import ExternalWallet from 'app/components/ExternalWallet';
import {TabItem} from 'app/types';

const WithdrawScreen = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const tabItems: TabItem[] = [
    {
      title: 'Furex User',
      content: <FurexUser />,
    },
    {
      title: 'External Wallet',
      content: <ExternalWallet />,
    },
  ];

  return (
    <Layout title="Send to">
      <View style={styles.tabContainer}>
        {tabItems.map((tab, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.tab, activeTab === index ? styles.activeTab : null]}
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
      <View style={{paddingVertical: s(10)}}>
        {tabItems[activeTab].content}
      </View>
    </Layout>
  );
};

export default WithdrawScreen;

const styles = StyleSheet.create({
  tabContainer: {
    borderRadius: s(895),
    paddingHorizontal: s(4),
    paddingVertical: s(4),
    backgroundColor: '#F3F3F3',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tab: {
    borderRadius: s(895),
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingVertical: s(10),
  },
  activeTab: {
    backgroundColor: '#ffff',
    borderRadius: s(895),
    borderWidth: 0,
  },
  tabText: {
    fontFamily: 'Sora',
    fontSize: s(13),
  },
});
