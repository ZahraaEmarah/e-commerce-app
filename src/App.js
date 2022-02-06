import { Component } from 'react'
import AppRouting from './Components/AppRouting';

export default class App extends Component {
  constructor() {
    super();
    this.state = {}
  }
  render() {
    return (
      <div>
        <AppRouting />
      </div>
    )
  }
}