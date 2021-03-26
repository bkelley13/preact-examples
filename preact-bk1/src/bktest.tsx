import { h, render, Component } from 'preact';

export default class Greeter extends Component {
  
  render( { name, from }) {
    return <h1>Hello, { name } from { from }!</h1>;
  }
}

