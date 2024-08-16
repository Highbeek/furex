import {Image, Pressable, Text, View} from 'react-native';
import {s} from 'react-native-size-matters';

const BillsPayment = ({onPress, label, icon}) => {
  return (
    <Pressable
      style={{
        marginRight: s(12),
      }}
      onPress={onPress}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          gap: s(2),
        }}>
        <Image
          source={icon}
          style={{width: 40, height: 40, marginBottom: s(6)}}
        />
        <Text
          style={{
            fontFamily: 'Sora',
            fontWeight: '500',
            fontSize: s(10),
            color: '#000',
          }}>
          {label}
        </Text>
      </View>
    </Pressable>
  );
};

export default BillsPayment;
