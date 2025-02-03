import {Cryptocurrency} from '../../src/types';
import CryptoServices from '../../src/services/CryptoServices';

// Configurar fetch global para pruebas
global.fetch = jest.fn();

describe('CryptoServices', () => {
  const mockCryptoData: Cryptocurrency[] = [
    {
      id: 'bitcoin',
      symbol: 'BTC',
      name: 'Bitcoin',
      price_usd: '50000.00',
      percent_change_24h: '2.5',
      market_cap_usd: '1000000000',
    },
  ];

  beforeEach(() => {
    // Limpiar todos los mocks antes de cada prueba
    (fetch as jest.Mock).mockClear();
  });

  it('getCryptoList recupera lista de criptomonedas', async () => {
    // Simular respuesta de fetch
    (fetch as jest.Mock).mockResolvedValue({
      json: jest.fn().mockResolvedValue({
        data: mockCryptoData,
      }),
    });

    // Llamar al método
    const result = await CryptoServices.getCryptoList();

    // Verificar que fetch se llamó con la URL correcta
    expect(fetch).toHaveBeenCalledWith(
      'https://api.coinlore.net/api/tickers/?start=0&limit=50',
    );

    // Verificar que el resultado coincide con los datos mockeados
    expect(result).toEqual(mockCryptoData);
  });

  it('getCryptoDetail recupera detalles de una criptomoneda', async () => {
    // Simular respuesta de fetch
    (fetch as jest.Mock).mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockCryptoData),
    });

    // Llamar al método
    const result = await CryptoServices.getCryptoDetail('bitcoin');

    // Verificar que fetch se llamó con la URL correcta
    expect(fetch).toHaveBeenCalledWith(
      'https://api.coinlore.net/api/ticker/?id=bitcoin',
    );

    // Verificar que el resultado coincide con el primer elemento de los datos mockeados
    expect(result).toEqual(mockCryptoData[0]);
  });
});
