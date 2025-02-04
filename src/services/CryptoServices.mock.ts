const mockCryptoServices = {
  getCryptoList: jest.fn(),
  getCryptoDetail: jest.fn(),
};

jest.mock('./CryptoServices', () => {
  return {
    __esModule: true,
    default: mockCryptoServices,
  };
});

export default mockCryptoServices;
