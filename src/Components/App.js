import React from 'react';
// import PropTypes from 'prop-types';
import Counter from './Counter';
import '../style/App.css';

class App extends React.Component {
  constructor() {
    super();
    this.adjustTimers = this.adjustTimers.bind(this);

    this.state = {
      sessionTime: 25,
      breakTime: 5,
      isRunning: false
    }
  }

  adjustTimers(timer, timeDirection) {
    var states = {...this.state};
    if (this.state.isRunning === false && timeDirection === "+") {
      states[timer] += 1;
    }
    if (this.state.isRunning === false && timeDirection === "-") {
      states[timer] -= 1;
    }
    this.setState({...states});
  }

  render() {
    return (
      <div>
        SessionTime is {this.state.sessionTime}
        breakTime is {this.state.breakTime}
        <Counter name="sessionTime" adjustTimers={this.adjustTimers}/>
        <Counter name="breakTime" adjustTimers={this.adjustTimers}/>
      </div>
    )
  }
}

// App.propTypes = {
//
// }

export default App;
