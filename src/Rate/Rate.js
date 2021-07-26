import React from 'react';
import './Rate.css';

class Rate extends React.Component {
  // constructor(props){
  //   super(props);
  // }


  render(){
    return (
      <div className="rate">
        <h3> Курс валют на {this.props.date}</h3>
        <div className="flex-container">
          {Object.keys(this.props.rate).map((keyName,i) => 
            (
              <div className="block flex-item" key={keyName}>
                <div className="currency-name">{keyName}</div>
                <div className="currency-in">{this.props.rate[keyName].toFixed(2)}*</div>
                <p> * Можно купить гривен за 1 {keyName}</p>
              </div>
            )
          )}
        </div>
      </div>
    );
  }
}

export default Rate;
