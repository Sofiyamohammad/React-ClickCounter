// Write your code here
import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  OnIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">
          The Button has been clicked
          <br /> <span className="count">{count}</span> times
        </h1>
        <p className="description">Click the button to increase the count!</p>
        {
          // eslint-disable-next-line
          <button className="click-button" onClick={this.OnIncrement}>
            Click Me
          </button>
        }
      </div>
    )
  }
}
export default ClickCounter
