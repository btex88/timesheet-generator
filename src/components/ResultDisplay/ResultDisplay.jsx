import React from 'react';
import ResultSubtitle from '../ResultSubtitle/ResultSubtitle';
import Output from '../Output/Output';
import { generateTime } from '../../data/data';

class ResultDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entree: localStorage.getItem('entree'),
      workday: localStorage.getItem('workday'),
      lunchtime: localStorage.getItem('lunchtime'),
      pause: localStorage.getItem('pause'),
      delay: localStorage.getItem('delay'),
    }
  }

  render() {
    const { entree, workday, lunchtime, pause, delay } = this.state
    const result = generateTime(
      Number(entree),
      Number(workday),
      Number(lunchtime),
      Number(pause),
      Number(delay),
      );
  
    return (
      <div>
        <ResultSubtitle />

        <Output
          name='Entrada:'
          time={result[0]}
        />
        <Output
          name='Início da Pausa:'
          time={result[1]}
        />
        <Output
          name='Fim da Pausa:'
          time={result[2]}
        />
        <Output
          name='Saída:'
          time={result[3]}
        />
      </div>
    )
  }
}

export default ResultDisplay;
