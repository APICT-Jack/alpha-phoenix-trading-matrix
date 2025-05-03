export default function MarketTicker() {
    const tickerItems = [
      { symbol: 'EUR/USD', price: '1.0854', change: 'positive', percent: '+0.24%' },
      { symbol: 'GBP/USD', price: '1.2658', change: 'negative', percent: '-0.12%' },
      { symbol: 'BTC/USD', price: '42,356.78', change: 'positive', percent: '+2.45%' },
      { symbol: 'ETH/USD', price: '2,345.67', change: 'positive', percent: '+1.89%' },
      { symbol: 'SPX500', price: '4,567.89', change: 'negative', percent: '-0.34%' },
      { symbol: 'GOLD', price: '1,987.56', change: 'positive', percent: '+0.67%' }
      // Add other ticker items...
    ];
  
    return (
      <div className="market-ticker" aria-hidden="true">
        <div className="ticker-container">
          {tickerItems.map((item, index) => (
            <div key={index} className="ticker-item">
              <span className="ticker-symbol">{item.symbol}</span>
              <span className="ticker-price">{item.price}</span>
              <span className={`ticker-change ${item.change}`}>{item.percent}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }