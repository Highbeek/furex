import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent,
} from 'react-native';
import {s} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface KeypadProps {
  onPressNumber: (num: string) => void;
  onFaceId: () => void;
  onDelete: () => void;
}

const Keypad: React.FC<KeypadProps> = ({onPressNumber, onFaceId, onDelete}) => {
  const renderButton = (
    label: string,
    onPress: (event: GestureResponderEvent) => void,
  ) => (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {renderButton('1', () => onPressNumber('1'))}
        {renderButton('2', () => onPressNumber('2'))}
        {renderButton('3', () => onPressNumber('3'))}
      </View>
      <View style={styles.row}>
        {renderButton('4', () => onPressNumber('4'))}
        {renderButton('5', () => onPressNumber('5'))}
        {renderButton('6', () => onPressNumber('6'))}
      </View>
      <View style={styles.row}>
        {renderButton('7', () => onPressNumber('7'))}
        {renderButton('8', () => onPressNumber('8'))}
        {renderButton('9', () => onPressNumber('9'))}
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.iconButton} onPress={onFaceId}>
          <Icon name="face-recognition" size={s(30)} color="#000" />
        </TouchableOpacity>
        {renderButton('0', () => onPressNumber('0'))}
        <TouchableOpacity style={styles.iconButton} onPress={onDelete}>
          <Icon name="arrow-left" size={s(30)} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: s(10),
    width: '100%',
    paddingHorizontal: s(20),
  },
  button: {
    width: s(60),
    height: s(60),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: s(20),
    color: '#000',
    fontFamily: 'Sora',
  },
  iconButton: {
    width: s(60),
    height: s(60),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Keypad;
