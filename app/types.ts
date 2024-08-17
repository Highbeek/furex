import {ReactNode} from 'react';

export type MainNavParamList = {
  HomeTab: undefined;
  CardsTab: undefined;
  WalletTab: undefined;
  GiftsCardTab: undefined;
  MoreTab: undefined;
};

export type TabItem = {
  title: string;
  content: ReactNode;
};

export interface OtpInputProps {
  length?: number;
  secure?: boolean;
  onCompleted?: (value: string) => void;
  value?: string;
  onChange?: (value: string) => void;
}
