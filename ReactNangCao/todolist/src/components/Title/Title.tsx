import React from 'react'
import styles from './title.module.scss'

type TitleProps = {
  address: {
    street: string
  }
  handleClick: (value: any) => void
}

function Title(props: TitleProps) {
  //   console.log(props.address)
  console.log(props)
  return (
    <h1 className={styles.title} onClick={() => props.handleClick(100)}>
      To do list typescript
    </h1>
  )
}

function equal(prevProp: TitleProps, nextProps: TitleProps) {
  return prevProp.address.street === nextProps.address.street
}

export default React.memo(Title)
