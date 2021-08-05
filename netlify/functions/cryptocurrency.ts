import axios from "axios";
import Redis from 'ioredis';
import { Handler } from "@netlify/functions";

require('dotenv').config();

const { COINMARKET_API_KEY } = process.env;
const { DATABASE_URL } = process.env;

const client = new Redis(DATABASE_URL);
const API_URL = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=4&convert=USD';

const getDataAndUpdateCache = async () => {
  const response = await axios.get(
    API_URL,
    { headers: { 'X-CMC_PRO_API_KEY': COINMARKET_API_KEY } }
  );
  const currencies = response.data.data;
  client.set('currencies', JSON.stringify(currencies));
  client.expire('currencies', 60);
  return currencies
}

setInterval(() => getDataAndUpdateCache(), 300000);

const handler: Handler = async (event, context) => {
  try {
    let response = await client.get('currencies');

    if (response !== null) {
      console.log('cache')
      return {
        statusCode: 200,
        body: JSON.stringify(JSON.parse(response)),
      };
    } else {
      console.log('api')
      const currencies = await getDataAndUpdateCache();
      return {
        statusCode: 200,
        body: JSON.stringify(currencies),
      };
    }
  } catch(error) {
    return {
      statusCode: 500,
      body: JSON.stringify('Error making request to API.'),
    };
  }
};

export { handler };