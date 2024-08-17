import React, {useState, useRef, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Modal,
  TouchableOpacity,
  Image,
  FlatList,
  Animated,
  TouchableWithoutFeedback,
  Dimensions,
  ImageBackground,
} from 'react-native';
import {s} from 'react-native-size-matters';
import {fiats} from 'app/assets/constants';
import {down, modalBg} from 'app/assets/images';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from './Button';
import {useNavigation} from '@react-navigation/native';

const FurexUser = () => {
  const [selectedCurrency, setSelectedCurrency] = useState(fiats[0]);
  const [modalVisible, setModalVisible] = useState(false);
  const [amount, setAmount] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const {navigate} = useNavigation();
  const [selectedPercentage, setSelectedPercentage] = useState<string | null>(
    null,
  );
  const [selectedFiat, setSelectedFiat] = useState<string | null>(null);
  const slideAnim = useRef(
    new Animated.Value(Dimensions.get('window').height),
  ).current;

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: modalVisible ? 0 : Dimensions.get('window').height,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [modalVisible]);

  const handleCurrencySelect = currency => {
    setSelectedCurrency(currency);
    setModalVisible(false);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  const formatAmount = (value: string) => {
    const numericValue = parseFloat(value.replace(/,/g, ''));
    return isNaN(numericValue) ? '' : numericValue.toLocaleString();
  };

  const handlePercentageSelect = (percentage: string) => {
    setSelectedPercentage(percentage);
  };

  const handleFiatSelect = fiat => {
    setSelectedFiat(fiat.code);
    setSelectedCurrency(fiat);
  };

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={[
        styles.modalItem,
        selectedFiat === item.code && styles.selectedModalItem,
      ]}
      onPress={() => handleFiatSelect(item)}>
      <View style={styles.modalLeft}>
        <Image source={item.icon} style={styles.modalCurrencyIcon} />
        <Text style={styles.modalCurrencyCode}>{item.code}</Text>
        <Text style={styles.modalCurrencyName}>{item.name}</Text>
      </View>
      <View style={styles.modalTextContainer}>
        <Text style={styles.modalCurrencyAmount}>{item.amt}</Text>
        <Text style={styles.modalCurrencyBalance}>{item.bal}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter Username</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={text => {
          setUsername(text);
        }}
        placeholder="Furetin"
        placeholderTextColor="#17171799"
      />
      <Text style={styles.validationResult}>Furetin Evisekwofa</Text>

      <View style={styles.inputContainer}>
        <TouchableOpacity
          style={styles.currencyDropdown}
          onPress={() => setModalVisible(true)}>
          <Image source={selectedCurrency.icon} style={styles.currencyIcon} />
          <Text style={styles.currencyCode}>{selectedCurrency.code}</Text>
          <Image source={down} style={styles.dropdownIcon} />
        </TouchableOpacity>
        <TextInput
          style={styles.amountInput}
          value={formatAmount(amount)}
          onChangeText={text => {
            const formattedText = text.replace(/[^0-9.]/g, '');
            setAmount(formattedText);
          }}
          placeholder="0.00NGN"
          keyboardType="number-pad"
        />
      </View>
      <View style={styles.inputSub}>
        <Text style={styles.balance}>Balance: 240,540NGN</Text>
        <Text style={styles.balanceConversion}>$200.86</Text>
      </View>

      <View style={styles.percentageContainer}>
        {['25%', '50%', '75%', '100%'].map(percentage => (
          <TouchableOpacity
            key={percentage}
            style={[
              styles.percentageButton,
              selectedPercentage === percentage &&
                styles.selectedPercentageButton,
            ]}
            onPress={() => handlePercentageSelect(percentage)}>
            <Text style={styles.percentageText}>{percentage}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={{paddingVertical: s(10)}}>
        <Button
          title="Withdraw"
          onPress={() =>
            navigate('ConfirmTransaction', {
              selectedCurrency,
              amount: formatAmount(amount),
              username,
            })
          }
          disabled={!amount || !username}
        />
      </View>

      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleModalClose}>
        <TouchableWithoutFeedback onPress={handleModalClose}>
          <ImageBackground source={modalBg} style={styles.modalBackground}>
            <Animated.View
              style={[
                // styles.modalContent,
                {transform: [{translateY: slideAnim}]},
              ]}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.headerText}>Select Asset</Text>
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={handleModalClose}>
                  <Icon name="close" size={24} color="#000" />
                </TouchableOpacity>
              </View>
              <FlatList
                data={fiats}
                keyExtractor={item => item.code}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
              />
            </Animated.View>
          </ImageBackground>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

export default FurexUser;

const styles = StyleSheet.create({
  container: {
    paddingTop: s(20),
    paddingHorizontal: s(16),
  },
  label: {
    fontFamily: 'Sora',
    fontWeight: '500',
    fontSize: s(16),
    color: '#171717',
    marginBottom: s(8),
  },
  input: {
    height: s(54),
    borderColor: '#0856AF',
    borderWidth: 1,
    borderRadius: s(12),
    paddingHorizontal: s(12),
    fontFamily: 'Sora',
    fontSize: s(16),
    color: '#171717',
  },
  validationResult: {
    color: '#36A32D',
    fontFamily: 'Sora',
    fontWeight: '500',
    fontSize: s(12),
    paddingVertical: s(10),
  },
  modalLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: s(10),
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#F0F0F0',
    borderWidth: 1,
    borderRadius: s(12),
    height: s(54),
    marginVertical: s(10),
    backgroundColor: '#fff',
  },
  currencyDropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: s(10),
    borderRightWidth: 1,
    borderRightColor: '#F7F7F7',
    flex: 3,
    paddingRight: s(20),
  },
  currencyIcon: {
    width: s(24),
    height: s(24),
    marginRight: s(8),
    resizeMode: 'contain',
  },
  currencyCode: {
    fontFamily: 'Sora',
    fontSize: s(14),
    color: '#171717',
    fontWeight: '500',
    textAlign: 'center',
  },
  amountInput: {
    flex: 7,
    height: s(54),
    paddingHorizontal: s(12),
    fontFamily: 'Sora',
    fontSize: s(16),
    color: '#171717',
  },
  dropdownIcon: {
    width: s(20),
    height: s(20),
    resizeMode: 'contain',
    marginRight: 4,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalContent: {
    width: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: s(12),
    borderTopRightRadius: s(12),
    padding: s(16),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: -2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    alignSelf: 'flex-end',
  },
  closeButton: {
    alignSelf: 'flex-end',
    marginLeft: 'auto',
    marginBottom: s(10),
  },
  closeIcon: {
    width: s(24),
    height: s(24),
    resizeMode: 'contain',
  },
  modalItem: {
    flexDirection: 'row',
    paddingHorizontal: s(10),
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: s(12),
    borderRadius: s(8),
  },
  selectedModalItem: {
    backgroundColor: '#E1F5FE',
  },
  modalCurrencyIcon: {
    width: s(24),
    height: s(24),
    resizeMode: 'contain',
  },
  modalCurrencyCode: {
    fontFamily: 'Sora',
    fontSize: s(14),
    color: '#171717',
    fontWeight: '500',
  },
  modalCurrencyName: {
    fontFamily: 'Sora',
    fontSize: s(12),
    color: '#757575',
  },
  modalTextContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalCurrencyAmount: {
    fontFamily: 'Sora',
    fontSize: s(14),
    color: '#171717',
    fontWeight: '500',
  },
  modalCurrencyBalance: {
    fontFamily: 'Sora',
    fontSize: s(12),
    color: '#757575',
  },
  percentageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: s(10),
  },
  percentageButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: s(5),
    paddingHorizontal: s(10),
    borderRadius: s(8),
    borderColor: '#E2E2E2',
    borderWidth: 1,
    marginHorizontal: s(5),
  },
  selectedPercentageButton: {
    borderWidth: 1,
    borderColor: '#000',
  },
  percentageText: {
    fontFamily: 'Sora',
    fontSize: s(14),
  },
  balance: {
    fontFamily: 'Sora',
    fontSize: s(14),
    color: '#171717',
  },
  balanceConversion: {
    fontFamily: 'Sora',
    fontSize: s(14),
    color: '#171717',
    textAlign: 'right',
  },
  headerText: {
    fontFamily: 'Sora',
    fontWeight: '500',
    fontSize: s(16),
    color: '#171717',
    marginBottom: s(10),
    textAlign: 'center',
    alignSelf: 'center',
  },
});
