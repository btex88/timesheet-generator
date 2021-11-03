import React, { Component } from 'react';
import styles from './Output.module.css'


class Output extends Component {
  render() {
    const { name, time } = this.props;

    return (
      <>
        <div className={styles.container}>
          <span className={styles.labelText}>{name}</span>
          <span className={styles.timeText}>{time}</span>
        </div>
      </>
    )
  }
}

export default Output
