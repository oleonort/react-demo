import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Clocks extends Component {
  constructor(props) {
    super(props);
    this.state = {time: new Date()}
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setState({time: new Date()}), this.props.updateInterval);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="react-clocks">
        <h1>Hi, I'm react clocks</h1>
        <h2>It is {this.state.time.toLocaleTimeString()} now :)</h2>
      </div>
    );
  }
}

Clocks.propTypes = {
  updateInterval: PropTypes.number
}

Clocks.defaultProps = {
  updateInterval: 1000
}

export default Clocks;
