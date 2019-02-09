import * as React from 'react'
import styles from './styles.scss'

const Button: React.FunctionComponent = () => {
  return (
    <button type="button" className={styles.container}>
      Press me
    </button>
  )
}

export default Button
