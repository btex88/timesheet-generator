import React from 'react';
import Title from './components/Title/Title';
import Subtitle from './components/Subtitle/Subtitle';
import InputDisplay from './components/InputDisplay/InputDisplay';
import Button from './components/Button/Button';
import ResultDisplay from './components/ResultDisplay/ResultDisplay';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      generate: 'Gerar Ponto!',
      generateAgain: 'Gerar Novamente!',
      reset: 'Voltar!',
      hide: true,
      show: false,
    }
    this.hideComponent = this.hideComponent.bind(this);
    this.showComponent = this.showComponent.bind(this);
  }

  hideComponent() {
    this.setState({
      hide: false,
      show: true,
    });
  }

  showComponent() {
    this.setState({
      hide: true,
      show: false,
    });
  }

  render() {
    return (
      <>
        <Title />
        {  this.state.show
          ? <Subtitle visibility={ this.state.show } />
          : <Subtitle visibility={ this.state.show } />
          }

        { this.state.show
          ? <ResultDisplay visibility={ this.state.hide } />
          : <InputDisplay visibility={ this.state.show } />
          }

        <Button
          callback={ this.hideComponent }
          visibility={ this.state.show }
          label={ this.state.generate }
        />

        <Button
          callback={ this.hideComponent }
          visibility={ this.state.hide }
          label={ this.state.generateAgain }
        />

        <Button
          callback={ this.showComponent }
          visibility={ this.state.hide }
          label={ this.state.reset }
        />
      </>
    )
  }
}

export default App;
