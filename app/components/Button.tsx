import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {s} from 'react-native-size-matters';

interface ButtonProps {
  title: string;
  onPress: () => void;
  loading?: boolean;
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
  backgroundColor?: string;
  textColor?: string;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  loading = false,
  disabled = false,
  style,
  textStyle,
  backgroundColor = '#0856AF',
  textColor = '#fff',
}) => {
  const bgColor = disabled ? '#A9A9A9' : backgroundColor;

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={loading || disabled}
      style={[styles.button, {backgroundColor: bgColor}, style]}>
      {loading ? (
        <ActivityIndicator size="small" color={textColor} />
      ) : (
        <Text style={[styles.text, {color: textColor}, textStyle]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: s(12),
    paddingHorizontal: s(24),
    borderRadius: s(100),
    alignItems: 'center',
    justifyContent: 'center',
    height: s(56),
  },
  text: {
    fontFamily: 'Sora',
    fontSize: s(16),
    fontWeight: '500',
  },
});

export default Button;
