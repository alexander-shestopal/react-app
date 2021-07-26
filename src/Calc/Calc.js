import React from 'react';
import './Calc.css';

class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'USD',
      valueCurrency: '0',
      sum: 1,
      valueCash:'USD',
      crossCurrency:false 
    }
    this.handleChange = this.handleChange.bind(this);
    this.changeHot = this.changeHot.bind(this);
    this.sumChange = this.sumChange.bind(this);
    this.cashChange = this.cashChange.bind(this);
    this.handleCashChange = this.handleCashChange.bind(this);

  }
    handleChange(event) {
      this.setState({value: event.target.value});
    }
    changeHot(event) {
      this.setState({valueCurrency: event.target.value});
    }
    sumChange(event) {
      this.setState({sum: event.target.value});
    }
    sumHandle() {
      if( this.state.valueCurrency == 0 ) {
        if(this.state.crossCurrency){
          return 'Мне нужно иметь на счету * ' + (this.state.sum  * this.props.rate[this.state.value]/this.props.rate[this.state.valueCash]).toFixed(2) + ' ' + this.state.valueCash;
        } else {
          return 'Мне нужно иметь на счету ' + (this.state.sum  * this.props.rate[this.state.value]).toFixed(2) + ' гривен';
        }
      }
      return 'Я получу на счет ' + (this.state.sum  * this.props.rate[this.state.value]).toFixed(2) + ' гривен';

    }
    cashChange(event) {
      this.setState({cash: event.target.value});
    }
    handleCashChange(event) {
      this.setState({valueCash: event.target.value});
    }
  render() {
    return (
      <div className="block">
        <div>Я хочу</div>
        {console.log(this.state.valueCurrency)}
        <div  className="div1">
          <div><label><input type="radio" name="radio" value="0" checked={this.state.valueCurrency === '0' ? true : false}
                  onChange = { (event) =>this.setState({valueCurrency: event.target.value})}/>купить</label></div>

          <div hidden={this.state.valueCurrency === '0' ? false : true}>

            <input type="number" value={this.state.sum} onChange={this.sumChange}/>
            <select value={this.state.value} onChange={this.handleChange}>
              {Object(this.props.currency).map((keyName,i) => 
              (
                  <option value={keyName} key={i}>{keyName}</option>
              )
              )}
            </select>
                    <h4> за гривну</h4>
          <input type="checkbox" checked={this.state.crossCurrency} onChange={(event) =>this.setState({crossCurrency: !this.state.crossCurrency})}/>
          <h5> отметьте чекбокс если хотите купить за валюту</h5>
          <div hidden={this.state.crossCurrency ? false : true}>
            <select value={this.state.valueCash} onChange={this.handleCashChange}>
              {Object(this.props.currency).map((keyName,i) => 
              (
                  <option value={keyName} key={i}>{keyName}</option>
              )
              )}
            </select>
          </div>  
          </div>
        </div>



        <div className="div2">
                    <div><label><input type="radio" name="radio"  value="1" checked={this.state.valueCurrency === '1' ? true : false}
                  onChange={this.changeHot}/>продать</label></div>
          <div hidden={this.state.valueCurrency === '1' ? false : true}>
            <input type="number" value={this.state.sum} onChange={this.sumChange}/>
            <select value={this.state.value} onChange={this.handleChange}>
              {Object(this.props.currency).map((keyName,i) => 
              (
                  <option value={keyName} key={i}>{keyName}</option>
              )
              )}
            </select>
          </div>

        </div>
                  <ul className="calc-res">
            <li>{this.sumHandle()}</li>


          </ul>
      </div>  
    );
  }
}

export default Calc;
