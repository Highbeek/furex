import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Layout from 'app/components/Layout';
import {s} from 'react-native-size-matters';
import OtpInput from 'app/components/OtpInput';
import Button from 'app/components/Button';

const EnterOtpScreen = ({navigation}) => {
  const [pin, setPin] = useState<string>('');
  return (
    <Layout title="Enter OTP sent to your email">
      <Text style={styles.txt}>
        Type in the 6 digit OTP code that was sent to you.
      </Text>
      <View style={styles.otpContainer}>
        <OtpInput
          length={6}
          secure
          value={pin}
          onChange={code => setPin(code)}
        />
      </View>
      <View style={styles.resendContainer}>
        <Text style={styles.txt}>Didn’t get the code?</Text>
        <Text style={styles.actionTxt}>Send Again</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Next"
          onPress={() => {
            navigation.navigate('Success');
          }}
        />
      </View>
    </Layout>
  );
};

export default EnterOtpScreen;

const styles = StyleSheet.create({
  otpContainer: {
    paddingVertical: s(20),
    marginBottom: s(20),
    marginTop: s(100),
  },
  resendContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: s(30),
    paddingVertical: s(20),
  },
  txt: {
    fontFamily: 'Sora',
    fontWeight: '400',
    fontSize: s(14),
    color: '#ABAAAA',
  },
  actionTxt: {
    fontFamily: 'Sora',
    fontWeight: '600',
    fontSize: s(14),
    color: '#0856AF',
  },
});
