import React from 'react';
import styles from '../Title/Title.module.css'

class Title extends React.Component {
  render() {
    return(
      <>
        <h1 className={styles.text}>Gerador de Ponto</h1>
      </>
    )
  }
}

export default Title
