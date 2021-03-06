import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styles from './index.module.css'

class Button extends Component {  
  render() {
    const { label, visibility, callback, } = this.props;
    return (
      <>
        { visibility || <button
          className={styles.button}
          onClick={ callback }
        >{ label }</button> }
      </>
    )
  }
}

Button.propTypes = {
  visibility: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
}

export default Button;
