import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Layout from 'app/components/Layout';
import {s} from 'react-native-size-matters';
import OtpInput from 'app/components/OtpInput';
import Button from 'app/components/Button';

const EnterOtpScreen = () => {
  const [pin, setPin] = useState<string>('');
  return (
    <Layout title="Enter OTP sent to your email">
      <Text style={styles.txt}>
        Type in the 6 digit OTP code that was sent to you.
      </Text>
      <View>
        <OtpInput
          length={6}
          secure
          value={pin}
          onChange={code => setPin(code)}
        />
      </View>
      <View>
        <Text style={styles.txt}>Didn’t get the code?</Text>
        <Text style={styles.actionTxt}>Send Again</Text>
      </View>
      <View>
        <Button title="Next" onPress={() => {}} />
      </View>
    </Layout>
  );
};

export default EnterOtpScreen;

const styles = StyleSheet.create({
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
