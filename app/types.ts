import { ReactNode } from "react";

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
