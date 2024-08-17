import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import React from 'react';
import {check} from 'app/assets/images';
import {s} from 'react-native-size-matters';
import {dummyData} from 'app/assets/constants';
import Button from 'app/components/Button';

const TransferSuccessScreen = () => {
  const renderItem = ({item}: {item: {title: string; val: string}}) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemTitle}>{item.title}</Text>
      <Text style={styles.itemValue}>{item.val}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={check} style={styles.icon} />
        <Text style={styles.headerText}>
          Transfer to Furetin is successfully confirmed
        </Text>
      </View>
      <View style={styles.transactionContainer}>
        <View style={styles.transactionDetailsTitle}>
          <Text style={styles.detailsTitle}>Transaction details</Text>
        </View>
        <FlatList
          data={dummyData}
          renderItem={renderItem}
          keyExtractor={item => item.title}
          style={styles.list}
        />
      </View>
      <View>
        <Button title="Done" onPress={() => {}} />
        <Button title="Next" onPress={() => {}} />
      </View>
    </View>
  );
};

export default TransferSuccessScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: s(16),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: s(16),
  },
  icon: {
    width: s(56),
    height: s(56),
    resizeMode: 'contain',
  },
  headerText: {
    marginLeft: s(12),
    fontSize: s(16),
    color: '#121212',
  },
  transactionContainer: {
    borderRadius: s(20),
    borderWidth: 1,
    padding: 2,
  },
  transactionDetailsTitle: {
    backgroundColor: '#F5F6F7',
    borderRadius: s(10),
    paddingVertical: s(4),
    alignItems: 'center',
    marginBottom: s(16),
  },
  detailsTitle: {
    fontFamily: 'Sora',
    fontWeight: '400',
    fontSize: s(16),
    color: '#121212',
  },
  list: {
    flex: 1,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: s(12),
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  itemTitle: {
    fontFamily: 'Sora',
    fontWeight: '400',
    fontSize: s(13),
    color: '#707070',
  },
  itemValue: {
    fontFamily: 'Sora',
    fontWeight: '500',
    fontSize: s(13),
    color: '#121212',
  },
});
