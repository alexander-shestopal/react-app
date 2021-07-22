import React from 'react';
import './App.css';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import Rate from './Rate/Rate';
import Calc from './Calc/Calc';

class App  extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'date': '',  
      'currencyRate': {}
    }
    this.currency = ['USD', 'RUB', 'CAD', 'EUR', 'PLN'];
    this.getRate();
  }
  
  getRate = () => {
    fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
    .then(data => {
      return data.json();
    })
    .then( data => {
    
      let result = {};
      for ( let i = 0; i < this.currency.length; i++) {
        data.forEach(element => {
          if(this.currency[i] === element.cc ) {
        result[this.currency[i]] = element.rate;
          this.setState({ date: element.exchangedate });
          }         
        });

      } 
      console.log(result);
      this.setState({ currencyRate: result });

    });
  }

  render(){
    return (
      <div className="App">
        <Header/>

      <div className="container">
        <main>
          <Rate currency={this.currency} rate={this.state.currencyRate} date={this.state.date}/>
          <h3> Калькулятор обмена</h3>
          <Calc currency={this.currency} rate={this.state.currencyRate} />
        </main>
      </div>

      <div className="container" id="cookie_info">
        <div className="site-content">
          <div className="well">
            На нашем сайте мы используем cookie для сбора информации технического характера.<br /> в частности, для
            персонифицированной работы сайта мы обрабатываем IP-адрес региона вашего местоположения.&nbsp;
            <button className="btn btn-primary btn-sm">OK</button></div>
        </div>
      </div>
      <Footer/>

      </div>
    );
  }
}

export default App;
