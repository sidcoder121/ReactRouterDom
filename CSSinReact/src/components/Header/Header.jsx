import React from 'react'
import styles from '../Header/header.module.css'

export const Header = () => {
  return (
    <div className={styles.header}>
        <h3>Siddharth</h3>
        <button className="btn">Login</button>
    </div>
  )
}

export default Header
