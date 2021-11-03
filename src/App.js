import React from 'react';
import Title from './components/Title';
import Subtitle from './components/Subtitle';
import InputDisplay from './components/InputDisplay';
import Button from './components/Button';
import ResultDisplay from './components/ResultDisplay';
import styles from './App.module.css';
import Footer from './components/Footer';

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
      <div className={styles.main}>
        <Title />
        {  this.state.show
          || <Subtitle visibility={ this.state.show } /> }

        { this.state.show
          ? <ResultDisplay />
          : <InputDisplay /> }

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
      </div>

      <Footer />
    </>
    )
  }
}

export default App;
