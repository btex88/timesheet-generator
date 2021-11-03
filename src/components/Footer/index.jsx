import React, { Component } from 'react'
import styles from './Footer.module.css';

class Footer extends Component {
  render() {
    return (
      <footer className={styles.footer}>
        <span>Created & Developed by <a 
          className={styles.link} 
          href="https://github.com/btex88"
          target="blank"
        >Brunão <span className={styles.github}></span></a> Ⓒ 2021. All rights reserved.</span>
        
      </footer>
    )
  }
}

export default Footer;
