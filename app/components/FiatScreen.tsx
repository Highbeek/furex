import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {fiats} from 'app/assets/constants';
import {s} from 'react-native-size-matters';

const FiatScreen = () => {
  return (
    <View style={styles.container}>
      {fiats.map((fiat, index) => (
        <View key={index} style={styles.fiatContainer}>
          <View style={styles.leftSection}>
            <Image source={fiat.icon} style={styles.icon} />
            <Text style={styles.name}>{fiat.name}</Text>
            <Text style={styles.secondaryText}>{fiat.code}</Text>
          </View>
          <View style={styles.rightSection}>
            <Text style={styles.name}>{fiat.amt}</Text>
            <Text style={styles.secondaryText}>{fiat.bal}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default FiatScreen;

const styles = StyleSheet.create({
  container: {
    paddingVertical: s(10),
  },
  fiatContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: s(8),
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: s(10),
  },
  textGroup: {
    marginLeft: s(10),
  },
  icon: {
    width: s(24),
    height: s(24),
    resizeMode: 'contain',
    borderRadius: s(12),
  },
  rightSection: {
    alignItems: 'flex-end',
  },
  name: {
    fontFamily: 'Sora',
    fontWeight: '600',
    color: '#171717',
    fontSize: s(14),
  },
  secondaryText: {
    fontFamily: 'Sora',
    fontWeight: '500',
    color: '#717171',
    fontSize: s(13),
  },
});
