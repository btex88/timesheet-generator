import React, { Component } from 'react';
import Input from '../Input/Input';

class InputDisplay extends Component {
  render() {

    return (
      <div>
        <Input
          name='Entrada (hr/s):'
          label='entree'
          min='0'
          max='23'
          step='1'
          default='8'
        />

        <Input 
          name='Início pausa (hr/s):'
          label='lunchtime'
          min='0'
          max='23'
          step='1'
          default='12'
        />

        <Input
          name='Duração da Pausa (hr/s):'
          label='pause'
          min='1'
          max='4'
          step='1'
          default='1'
        />

        <Input
          name='Jornada de Trabalho (hr/s):'
          label='workday'
          min='6'
          max='12'
          step='1'
          default='8'
        />
        
        <Input
          name='Atraso Tolerável (min):'
          label='delay'
          min='5'
          max='30'
          step='5'
          default='15'
        />
      </div>
    );
  }
}

export default InputDisplay;
