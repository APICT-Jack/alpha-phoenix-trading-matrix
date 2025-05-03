import { FaCopy, FaChartLine } from 'react-icons/fa';

export default function TradingCard() {
  return (
    <div className="trading-card">
      <div className="card-header">
        <div className="currency-pair">
          <span className="pair">Crash1000</span>
          <span className="price">1.0854</span>
          <span className="change positive">+0.24%</span>
        </div>
        <div className="timeframe-selector">
          {['30M', '1H', '4H', '1D'].map((timeframe) => (
            <button 
              key={timeframe}
              className={timeframe === '30M' ? 'active' : ''}
            >
              {timeframe}
            </button>
          ))}
        </div>
      </div>
      <div className="chart-placeholder" aria-hidden="true">
        {/* Chart visualization would go here */}
      </div>
      <div className="card-footer">
        <div className="action-buttons">
          <button className="CopyT-btn">
            <FaCopy /> Copy Trade
          </button>
          <button className="Chart-btn">
            <FaChartLine /> Open Chart
          </button>
        </div>
      </div>
    </div>
  );
}