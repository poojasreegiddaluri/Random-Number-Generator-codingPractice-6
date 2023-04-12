// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {displayCount: 0}

  onGeneration = () => {
    const randomNumber = Math.ceil(Math.random() * 100)

    this.setState(prevState => ({
      displayCount: prevState.displayCount + randomNumber,
    }))
  }

  render() {
    const {displayCount} = this.state

    return (
      <div className="container">
        <div className="card-container">
          <h1 className="title">Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <button type="button" className="button" onClick={this.onGeneration}>
            Generate
          </button>
          <p className="count">{displayCount}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
