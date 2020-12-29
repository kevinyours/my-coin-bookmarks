import { getMarketCurrencies } from './coins';

describe('getMarketCurrencies', () => {
  const query = {
    vsCurrency: 'usd',
    order: 'market_cap_desc',
    perPage: 10,
    page: 1,
    sparkLine: false,
    priceChangePercentage: '1h,24h,7d',
  };

  it('should return currency data', async () => {
    const result = await getMarketCurrencies(query);
    expect(result.length).toBe(10);
  });

  it('should have 20 data', async () => {
    const result = await getMarketCurrencies({ ...query, perPage: 20 });
    expect(result.length).toBe(20);
  });

  it('should return a single array', async () => {
    const result = await getMarketCurrencies({ ...query, ids: 'bitcoin' });
    expect(result.length).toBe(1);
  });

  it('should return on bitcoin and ethereum', async () => {
    const result = await getMarketCurrencies({
      ...query,
      ids: 'bitcoin,ethereum',
    });
    expect(result.length).toBe(2);
  });
});
