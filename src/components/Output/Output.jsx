import React, { Component } from 'react'

class Output extends Component {
  render() {
    const { name, time } = this.props;

    return (
      <>
        <div >
          <span>{name}</span>
          <span>{time}</span>
        </div>
      </>
    )
  }
}

export default Output
