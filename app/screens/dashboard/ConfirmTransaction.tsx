import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Modal,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {s} from 'react-native-size-matters';
import Layout from 'app/components/Layout';
import {useNavigation} from '@react-navigation/native';
import Button from 'app/components/Button';
import moment from 'moment';
import Keypad from 'app/components/Keypad';
import {modalBg} from 'app/assets/images';
import Icon from 'react-native-vector-icons/Ionicons';

const ConfirmTransaction = ({route}: any) => {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);
  const [pin, setPin] = useState('');
  const {selectedCurrency, amount, username} = route?.params;
  const date = moment().format('D MMMM, YYYY');

  const handlePressNumber = (number: string) => {
    if (pin.length < 4) {
      setPin(pin + number);
    }
  };

  const handleFaceId = () => {
    console.log('Face ID pressed');
  };

  const handleDelete = () => {
    setPin(pin.slice(0, -1));
  };

  const handleModalClose = () => {
    Keyboard.dismiss();
    setModalVisible(false);
  };
  return (
    <Layout title="Confirm Transaction">
      <View style={styles.container}>
        <Image source={selectedCurrency.icon} style={styles.icon} />
        <Text style={styles.body}>You are about to send</Text>
        <Text style={styles.amt}>{amount}</Text>
        <Text style={styles.body}>{username}</Text>
      </View>
      <View style={styles.details}>
        <View style={styles.detailRow}>
          <Text style={styles.detailsTxt}>Transaction charge</Text>
          <Text style={styles.detailsTxt}>Free</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailsTxt}>Date</Text>
          <Text style={styles.detailsTxt}>{date}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailsTxt}>Reference</Text>
          <Text style={styles.detailsTxt}>#57483....869</Text>
        </View>
      </View>
      <View style={{paddingVertical: s(10)}}>
        <Button title="Continue" onPress={() => setModalVisible(true)} />
      </View>
      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}>
        <TouchableWithoutFeedback onPress={handleModalClose}>
          <View style={styles.modalContainer}>
            <ImageBackground source={modalBg} resizeMode="cover">
              <Text
                style={{
                  textAlign: 'center',
                  marginTop: s(20),
                  paddingVertical: s(10),
                  fontFamily: 'Sora',
                  fontWeight: '600',
                  fontSize: s(16),
                  color: '#171717',
                }}>
                Enter your transaction PIN
              </Text>
              <View style={styles.modalContent}>
                <View style={styles.inputContainer}>
                  {Array(4)
                    .fill('')
                    .map((_, index) => (
                      <View
                        key={index}
                        style={[
                          styles.otpBox,
                          pin[index] && styles.filledOtpBox,
                        ]}>
                        <Text style={styles.otpText}>{pin[index] || ''}</Text>
                      </View>
                    ))}
                </View>
                <Keypad
                  onPressNumber={handlePressNumber}
                  onFaceId={handleFaceId}
                  onDelete={handleDelete}
                />
              </View>
            </ImageBackground>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </Layout>
  );
};

export default ConfirmTransaction;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  body: {
    fontFamily: 'Sora',
    fontWeight: '400',
    fontSize: s(16),
    color: '#ABAAAA',
  },
  icon: {
    width: s(48),
    height: s(48),
  },
  amt: {
    fontFamily: 'Sora',
    fontWeight: '600',
    fontSize: s(24),
    color: '#171717',
  },
  details: {
    backgroundColor: '#FAFAFA',
    padding: s(10),
    borderRadius: s(10),
    gap: s(20),
    marginVertical: s(30),
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detailsTxt: {
    fontFamily: 'Sora',
    fontWeight: '400',
    fontSize: s(16),
    color: '#171717',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '100%',
    height: s(400),
    padding: s(20),
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  closeButton: {
    position: 'absolute',
    top: s(10),
    right: s(10),
    zIndex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: s(20),
  },
  otpBox: {
    width: s(50),
    height: s(50),
    borderWidth: 1,
    borderColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: s(10),
  },
  filledOtpBox: {
    backgroundColor: '#E0E0E0',
  },
  otpText: {
    fontSize: s(24),
    color: '#000',
  },
});
