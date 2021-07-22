import React from 'react';
import './Calc.css';

class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'USD',
      valueCurrency: '0',
      sum: 1 
    }
     this.handleChange = this.handleChange.bind(this);
     this.changeHot = this.changeHot.bind(this);
          this.sumChange = this.sumChange.bind(this);

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
      if( this.state.valueCurrency == 0) {
        return 'Мне нужно иметь на счету ' + (this.state.sum  * this.props.rate[this.state.value]).toFixed(2) + ' гривен';
      }
      return 'Я получу на счет ' + (this.state.sum  * this.props.rate[this.state.value]).toFixed(2) + ' гривен';

    }
  render() {
    return (
      <div className="block">
        <div>Я хочу</div>
        {console.log(this.state.valueCurrency)}
        <div><label><input type="radio" name="radio" value="0" checked={this.state.valueCurrency === '0' ? true : false}
			onChange={(event) =>this.setState({valueCurrency: event.target.value})}/>купить</label></div>
        <div><label><input type="radio" name="radio"  value="1" checked={this.state.valueCurrency === '1' ? true : false}
			onChange={this.changeHot}/>продать</label></div>
        <div>
          <input type="number" value={this.state.sum} onChange={this.sumChange}/>
          <select value={this.state.value} onChange={this.handleChange}>
          {Object(this.props.currency).map((keyName,i) => 
          (
              <option value={keyName} key={i}>{keyName}</option>
          )
        )}
          </select>
        </div>
        <div>
          <h4>Результат</h4>
          <ul className="calc-res">
            <li>{this.sumHandle()}</li>
            <li>EUR 150</li>
            <li>EUR 150</li>
            <li>EUR 150</li>
            <li>EUR 150</li>
          </ul>
        </div>
      </div>  
    );
  }
}

export default Calc;
