import React, {useRef} from 'react';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {s} from 'react-native-size-matters';
import {OtpInputProps} from 'app/types';

export default function OtpInput({
  length = 6,
  secure = false,
  onCompleted,
  value,
  onChange,
}: OtpInputProps) {
  const otpRef = useRef<OTPInputView>(null);

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
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#bbb',
        color: '#171717',
        borderRadius: s(8),
        height: s(58),

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
