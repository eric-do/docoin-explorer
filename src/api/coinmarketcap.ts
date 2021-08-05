import axios from 'axios';
import { IHistoricalCrypto } from '../types';

export const getLatestMarketInfo = () => {
  return axios.get<IHistoricalCrypto[]>('/.netlify/functions/cryptocurrency');
};