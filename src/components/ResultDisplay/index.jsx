import React from 'react';
import Output from '../Output';
import { generateTime } from '../../data/data';
import styles from './index.module.css';

class ResultDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.timeObj = {
      entree: localStorage.getItem('entree'),
      workday: localStorage.getItem('workday'),
      lunchtime: localStorage.getItem('lunchtime'),
      pause: localStorage.getItem('pause'),
      delay: localStorage.getItem('delay'),
    }

    this.labelObj = {
      name: [
        'Entrada:',
        'Início da Pausa:',
        'Fim da Pausa:',
        'Saída:'
      ],
    }
  }

  render() {
    const {
      entree,
      workday,
      lunchtime,
      pause,
      delay
    } = this.timeObj;

    const { name } = this.labelObj;

    const result = generateTime(
      Number(entree),
      Number(workday),
      Number(lunchtime),
      Number(pause),
      Number(delay),
    );

    return (
      <div className={styles.container}>
        {name.map((value, index) => (
          <Output
            key={ Object.keys(this.timeObj)[index] }
            name={ value }
            time={ result[index] }
          />
        ))}
      </div>
    )
  }
}

export default ResultDisplay;
