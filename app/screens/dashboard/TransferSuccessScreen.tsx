import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import React from 'react';
import {check} from 'app/assets/images';
import {s} from 'react-native-size-matters';
import {dummyData} from 'app/assets/constants';
import Button from 'app/components/Button';

const TransferSuccessScreen = ({navigation}) => {
  const renderItem = ({
    item,
    index,
  }: {
    item: {title: string; val: string};
    index: number;
  }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemTitle}>{item.title}</Text>
      <Text
        style={[
          styles.itemValue,
          index === dummyData.length - 1 && styles.specialItemValue,
        ]}>
        {item.val}
      </Text>
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
      <View style={styles.buttonContainer}>
        <Button
          title="Done"
          onPress={() => {
            navigation.navigate('TabScreens');
          }}
        />
        <Button
          title="Next"
          onPress={() => {}}
          backgroundColor="#fff"
          style={{borderWidth: 1, borderColor: '#0856AF'}}
        />
      </View>
    </View>
  );
};

export default TransferSuccessScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: s(12),
    backgroundColor: '#FFFFFF',
  },
  header: {
    alignItems: 'center',
    marginBottom: s(16),
    gap: s(20),
  },
  icon: {
    width: s(48),
    height: s(48),
    resizeMode: 'contain',
  },
  headerText: {
    fontSize: s(14),
    fontWeight: '600',
    color: '#121212',
    textAlign: 'center',
    flexShrink: 1,
    paddingHorizontal: s(40),
  },

  transactionContainer: {
    borderRadius: s(8),
    borderWidth: 1,
    borderColor: '#E0E0E0',
    padding: s(12),
    marginBottom: s(16),
  },
  transactionDetailsTitle: {
    backgroundColor: '#F5F6F7',
    borderRadius: s(8),
    paddingVertical: s(10),
    paddingHorizontal: s(8),
    alignItems: 'center',
    marginBottom: s(12),
  },
  detailsTitle: {
    fontFamily: 'Sora',
    fontWeight: '600',
    fontSize: s(14),
    color: '#121212',
  },
  list: {
    marginBottom: s(12),
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: s(8),
  },
  itemTitle: {
    fontFamily: 'Sora',
    fontWeight: '400',
    fontSize: s(9),
    color: '#707070',
  },
  itemValue: {
    fontFamily: 'Sora',
    fontWeight: '500',
    fontSize: s(9),
    color: '#121212',
  },
  specialItemValue: {
    borderColor: '#0280FF',
    borderWidth: 1,
    borderRadius: s(15),
    paddingHorizontal: s(6),
    paddingVertical: s(2),
    color: '#0856AF',
    fontSize: s(9),
  },
  buttonContainer: {
    marginTop: s(12),
    justifyContent: 'space-between',

    gap: s(10),
  },
});
