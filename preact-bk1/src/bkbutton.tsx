import { h, render, Component } from 'preact';

export default class BkButton extends Component {
  state = {
    value: 0;
  }

  increment = () => {
    this.setState(prev => ( {value: prev.value + 1}));
  }
  
  render( { label }, state) { 
    return (
      <div>
    Counter: {state.value}
    <button type="button" onClick={this.increment}>{ label }</button>
    </div>
    );
  }
}

