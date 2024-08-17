import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {ReactNode, useState} from 'react';
import Layout from 'app/components/Layout';
import {s} from 'react-native-size-matters';
import CrypoScreen from 'app/components/CrypoScreen';
import FiatScreen from 'app/components/FiatScreen';

type TabItem = {
  title: string;
  content: ReactNode;
};

const DepositScreen = () => {
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
    <Layout title="Select Asset">
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

export default DepositScreen;

const styles = StyleSheet.create({
  tabContainer: {
    borderRadius: s(895),
    paddingHorizontal: s(4),
    paddingVertical: s(4),
    backgroundColor: '#F3F3F3',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: s(47),
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
