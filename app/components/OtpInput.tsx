import React, {useEffect, useRef} from 'react';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {s} from 'react-native-size-matters';

interface OtpInputProps {
  length?: number;
  secure?: boolean;
  onCompleted?: (value: string) => void;
  value?: string;
  onChange?: (value: string) => void;
}

export default function OtpInput({
  length = 6,
  secure = false,
  onCompleted,
  value,
  onChange,
}: OtpInputProps) {
  const otpRef = useRef<OTPInputView>(null);

  useEffect(() => {
    // Any setup logic or alternative focus handling if needed
    // Example: scrolling into view or highlighting input field
  }, []);

  return (
    <OTPInputView
      ref={otpRef}
      pinCount={length}
      autoFocusOnLoad={false}
      style={{
        height: s(44),
        width: length === 6 ? '100%' : '90%',
        alignSelf: 'center',
      }}
      secureTextEntry={secure}
      keyboardType="number-pad"
      editable
      codeInputFieldStyle={{
        backgroundColor: '#bbb',
        color: '#ccc',
        borderRadius: s(8),
        height: s(58),
        borderWidth: 0,
        justifyContent: 'space-between',
        width: s(48),
      }}
      codeInputHighlightStyle={{
        color: '#ccc',
      }}
      onCodeFilled={onCompleted}
      onCodeChanged={onChange}
      code={value}
    />
  );
}
