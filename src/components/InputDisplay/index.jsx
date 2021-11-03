import React, { Component } from 'react';
import Input from '../Input';
import styles from './index.module.css'

class InputDisplay extends Component {
  constructor(props) {
    super(props);
    this.inputs = [
      {
        name: 'Entrada (hr/s):',
        label: 'entree',
        min: 0,
        max: 23,
        step: 1,
        default: 8,
      },
      {
        name: 'Início da Pausa (hr/s):',
        label: 'lunchtime',
        min: 0,
        max: 23,
        step: 1,
        default: 12,
      },
      {
        name: 'Duração da Pausa (hr/s):',
        label: 'pause',
        min: 1,
        max: 4,
        step: 1,
        default: 1,
      },
      {
        name: 'Jornada de Trabalho (hr/s):',
        label: 'workday',
        min: 6,
        max: 12,
        step: 1,
        default: 8,
      },
      {
        name: 'Atraso Tolerável (min):',
        label: 'delay',
        min: 5,
        max: 30,
        step: 5,
        default: 15,
      },
    ];
  }

  render() {
    return (
      <div className={styles.container}>
        {this.inputs.map((value) => (
          <Input
          key={value.label}
          { ...value }
          />
        ))}
      </div>
    );
  }
}

export default InputDisplay;
