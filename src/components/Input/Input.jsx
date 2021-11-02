import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      name: this.props.name,
      label: this.props.label,
      min: Number(this.props.min),
      max: Number(this.props.max),
      step: Number(this.props.step),
      default: Number(this.props.default),
      value: Number(this.props.default),
    }
  };

  handleChange(event) {
    this.setState({
      name: this.props.name,
      label: this.props.label,
      min: Number(this.props.min),
      max: Number(this.props.max),
      step: Number(this.props.step),
      default: Number(event.target.value),
      value: Number(event.target.value),
    });
  };

  render() {
    localStorage.setItem(this.props.label, this.state.value);
    const arr = Array(((this.state.max - this.state.min) / this.state.step) + 1).fill(this.state.step);
    let count = 0;
    arr.forEach((_value, index) => {
      count += this.state.step;
      if (count === 24) count = 0;
      arr.splice(index, 1, count);
    })
    arr.sort((value1, value2) => value1 - value2);

    const { visibility } = this.props;
    return (
      <>
        { visibility
        ? <></>
        : <div className="container">
          <label htmlFor={this.state.label}>{this.state.name}</label>
          <select
            defaultValue={this.state.default}
            onChange={this.handleChange}
          >
            {arr.map((data) => (
              <option
                key={`${this.state.label}-${data}`}
                value={this.state.label === 'workday' ? data + 5 : data}
                label={this.state.label === 'workday' ? data += 5 : data}
              />))}
          </select>
        </div> }
      </>
    )
  }
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  min: PropTypes.string.isRequired,
  max: PropTypes.string.isRequired,
  step: PropTypes.string.isRequired,
  default: PropTypes.string.isRequired,
}

export default Input
