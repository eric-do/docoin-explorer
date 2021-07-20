import { BlockChain, Transaction } from "../types";

export const timeDifference = (timestamp: number, locale: string) => {
  const msPerMinute = 60 * 1000;
  const msPerHour = msPerMinute * 60;
  const msPerDay = msPerHour * 24;
  const msPerMonth = msPerDay * 30;
  const msPerYear = msPerDay * 365;

  const current = Date.now();
  const elapsed = current - timestamp;

  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: "auto" });

  if (elapsed < msPerMinute) {
       return rtf.format(-Math.floor(elapsed/1000), 'seconds');
  }

  else if (elapsed < msPerHour) {
       return rtf.format(-Math.floor(elapsed/msPerMinute), 'minutes');
  }

  else if (elapsed < msPerDay) {
       return rtf.format(-Math.floor(elapsed/msPerHour), 'hours');
  }

  else if (elapsed < msPerMonth) {
    return rtf.format(-Math.floor(elapsed/msPerDay), 'days');
  }

  else if (elapsed < msPerYear) {
    return rtf.format(-Math.floor(elapsed/msPerMonth), 'months');
  }

  else {
      return new Date(timestamp).toLocaleDateString(locale);
  }
}

export const truncateHash = (hash: string) => (
  hash.length > 25 ? hash.substring(0, 25) + '...' : hash
)

export const getBlockTableData = (blockchain: BlockChain)  => (
  blockchain.chain.map(block => ({
      key: block.merkle_root,
      fields: [
        block.index,
        timeDifference(block.timestamp * 1000, 'en'),
        truncateHash(block.transactions[0].recipient),
        block.transactions.reduce((sum, tx) => sum + tx.amount, 0)
      ]
    })
  )
);

export const getTransactionTableData = (transactions: Transaction[], exchange: number) => {
  return transactions.map(tx => {
    const { hash, timestamp: time, amount } = tx

    return {
      key: hash,
      fields: [
        truncateHash(hash),
        timeDifference(time * 1000, 'en'),
        amount,
        (amount * exchange).toFixed(2)
      ]
    }
  })
};