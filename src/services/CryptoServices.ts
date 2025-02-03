import {Cryptocurrency} from '../types';

class CryptoServices {
  private baseUrl = 'https://api.coinlore.net/api';

  async getCryptoList(start = 0, limit = 50): Promise<Cryptocurrency[]> {
    try {
      const response = await fetch(
        `${this.baseUrl}/tickers/?start=${start}&limit=${limit}`,
      );
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error('Error fetching crypto list:', error);
      throw error;
    }
  }

  async getCryptoDetail(id: string): Promise<Cryptocurrency> {
    try {
      const response = await fetch(`${this.baseUrl}/ticker/?id=${id}`);
      const data = await response.json();
      return data[0];
    } catch (error) {
      console.error('Error fetching crypto detail:', error);
      throw error;
    }
  }
}

export default new CryptoServices();
