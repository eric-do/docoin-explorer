export interface BlockChain {
  index: number;
  merkle_root: string;
  previous_hash: string;
  proof: number;
  timestamp: number;
  transactions: Transaction[]
};

export interface Transaction {
  amount: number;
  recipient: string;
  sender: string;
  signature: string;
  timestamp: number;
  length: number;
}