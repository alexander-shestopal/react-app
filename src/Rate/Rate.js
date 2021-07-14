import React from 'react';
import './Rate.css';

class Rate extends React.Component {
  render(){
  return (
        <div className="rate">
          <h3> Курс валют на 30 ноября 2019</h3>
          <div className="flex-container">
            <div className="block flex-item">
              <div className="currency-name">USD</div>
              <div className="currency-in">1500 Kr</div>
              <div className="currency-out">1200 Kr</div>
            </div>
            <div className="block flex-item">
              <div className="currency-name">USD</div>
              <div className="currency-in">1500 Kr</div>
              <div className="currency-out">1200 Kr</div>
            </div>
            <div className="block flex-item">
              <div className="currency-name">USD</div>
              <div className="currency-in">1500 Kr</div>
              <div className="currency-out">1200 Kr</div>
            </div>
          </div>
        </div>
  );
}
}

export default Rate;
