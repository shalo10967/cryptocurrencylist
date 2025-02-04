export interface Cryptocurrency {
  id: string;
  symbol: string;
  name: string;
  price_usd: string;
  percent_change_24h: string;
  market_cap_usd: string;
}

export type RootStackParamList = {
  Home: undefined;
  Detail: {cryptoId: string};
};
