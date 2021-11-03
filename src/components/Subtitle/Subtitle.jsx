import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Subtitle/Subtitle.module.css'

class Subtitle extends React.Component {
  render() {
    const { visibility } = this.props;

    return (
      <>
        { visibility ? <></> : <h2>Escolha seu padrão de horários</h2>  }
        { visibility ? <></> : <span>Caso você não selecione nada, o ponto será gerado com base no padrão preestabelecido</span> }
      </>
    )
  }
}

Subtitle.propTypes = {
  visibility: PropTypes.bool.isRequired,
}

export default Subtitle;
