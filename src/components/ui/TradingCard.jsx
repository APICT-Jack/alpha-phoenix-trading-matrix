import { FaCopy, FaChartLine } from 'react-icons/fa';
import { useEffect, useRef } from 'react';
import { useTheme } from '../../context/ThemeContext';

export default function TradingCard() {
  const widgetRef = useRef(null);
  const { darkMode } = useTheme();
  
  const openFullChart = () => {
    const symbol = "BINANCE:BTCUSDT";
    const theme = darkMode ? "dark" : "light";
    const url = `https://www.tradingview.com/chart/?symbol=${symbol}&theme=${theme}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  useEffect(() => {
    if (widgetRef.current) {
      widgetRef.current.innerHTML = '';
    }

    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    script.onload = () => {
      if (window.TradingView && widgetRef.current) {
        new window.TradingView.widget({
          autosize: true,
          symbol: "BINANCE:BTCUSDT",
          interval: "30",
          timezone: "Etc/UTC",
          theme: darkMode ? "dark" : "light",
          style: "1",
          locale: "en",
          toolbar_bg: darkMode ? "#1e222d" : "#f1f3f6",
          enable_publishing: false,
          hide_top_toolbar: true,
          hide_side_toolbar: false,
          allow_symbol_change: false,
          container_id: "tradingview-widget-container"
        });
      }
    };
    
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
      if (widgetRef.current) {
        widgetRef.current.innerHTML = '';
      }
    };
  }, [darkMode]);

  return (
    <div className="trading-card" style={{
      border: `1px solid ${darkMode ? '#2a2e39' : '#e0e0e0'}`,
      borderRadius: '8px',
      overflow: 'hidden',
      backgroundColor: darkMode ? '#1e222d' : '#ffffff',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      maxWidth: '100%',
      margin: '0 auto'
    }}>
      <div className="card-header" style={{
        padding: '12px 16px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: `1px solid ${darkMode ? '#2a2e39' : '#e0e0e0'}`
      }}>
        <div className="currency-pair" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span className="pair" style={{
            fontWeight: 'bold',
            color: darkMode ? '#ffffff' : '#000000'
          }}>BTC/USDT</span>
          <span className="price" style={{
            color: darkMode ? '#ffffff' : '#000000'
          }}>36,542.20</span>
          <span className="change positive" style={{
            color: '#0ecb81',
            fontWeight: '500'
          }}>+2.34%</span>
        </div>
        <div className="timeframe-selector" style={{ display: 'flex', gap: '4px' }}>
          {['15M', '30M', '1H', '4H'].map((timeframe) => (
            <button 
              key={timeframe}
              style={{
                padding: '4px 8px',
                fontSize: '12px',
                borderRadius: '4px',
                border: 'none',
                background: timeframe === '30M' 
                  ? (darkMode ? '#3a3f4d' : '#f0f0f0') 
                  : 'transparent',
                color: darkMode ? '#ffffff' : '#000000',
                cursor: 'pointer'
              }}
            >
              {timeframe}
            </button>
          ))}
        </div>
      </div>
      
      <div 
        id="tradingview-widget-container"
        ref={widgetRef}
        className="tradingview-widget-container"
        style={{ height: "300px", width: "100%" }}
      >
        <div className="tradingview-widget-container__widget"></div>
      </div>
      
      <div className="card-footer" style={{
        padding: '12px 16px',
        borderTop: `1px solid ${darkMode ? '#2a2e39' : '#e0e0e0'}`
      }}>
        <div className="action-buttons" style={{
          display: 'flex',
          gap: '8px'
        }}>
          <button style={{
            flex: 1,
            padding: '8px',
            borderRadius: '4px',
            border: 'none',
            background: darkMode ? '#3a3f4d' : '#f0f0f0',
            color: darkMode ? '#ffffff' : '#000000',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
            cursor: 'pointer',
            fontWeight: '500'
          }}>
            <FaCopy /> Copy Trade
          </button>
          <button 
            onClick={openFullChart}
            style={{
              flex: 1,
              padding: '8px',
              borderRadius: '4px',
              border: 'none',
              background: darkMode ? '#3a3f4d' : '#f0f0f0',
              color: darkMode ? '#ffffff' : '#000000',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              cursor: 'pointer',
              fontWeight: '500'
            }}
          >
            <FaChartLine /> Open Full Chart
          </button>
        </div>
      </div>
    </div>
  );
}