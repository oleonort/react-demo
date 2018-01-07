import React from 'react';
import PropTypes from 'prop-types';

const StateLessComponent = ({ value }) => (
  <h1 className="state-less-component">
    Hello, I'm stateless component,
    <br/> will show what you've passed -> {value}
  </h1>
);

StateLessComponent.propTypes = {
  value: PropTypes.string
}

StateLessComponent.defaultProps = {
  value: '[nothing yet]'
}

export default StateLessComponent;
