export interface Block {
  index: number;
  merkle_root: string;
  previous_hash: string;
  proof: number;
  timestamp: number;
  transactions: Transaction[]
};

export interface BlockChain {
  chain: Block[]
}

export interface Transaction {
  amount: number;
  recipient: string;
  sender: string;
  signature: string;
  timestamp: number;
  length: number;
  hash: string;
}

export interface IHistoricalCrypto {
  id: number;
  name: string;
  symbol: string;
  max_supply: number;
  circulating_supply: number;
  total_supply: number;
  cmc_rank: number;
  last_update: string;
  quote: {
    [fiat: string]: {
      price: number;
      volume_24h: number;
      percent_change_1h: number;
      percent_change_24h: number;
      percent_change_7d: number;
      percent_change_30d: number;
      percent_change_60d: number;
      percent_change_90d: number;
      market_cap: number;
      last_updated: string;
    }
  }
}