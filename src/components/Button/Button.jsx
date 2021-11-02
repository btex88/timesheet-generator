import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Button extends Component {  
  render() {
    const { label, visibility, callback, } = this.props;
    return (
      <>
        { visibility
        ? <></>
        : <button onClick={ callback }>{ label }</button> }
      </>
    )
  }
}

Button.propTypes = {
  visibility: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
}

export default Button;
