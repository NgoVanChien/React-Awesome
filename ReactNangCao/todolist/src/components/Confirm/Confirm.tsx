import styles from './confirm.module.scss'

interface ConfirmProps {
  visible: boolean
}

export default function Confirm({ visible }: ConfirmProps) {
  return (
    <div className={styles.modalRoot} style={{ visibility: visible ? 'visible' : 'hidden' }}>
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <div className={styles.confirm}>
          <p className={styles.title}>Are you sure?</p>
          <button>OK</button>
          <button>Cancel</button>
        </div>
      </div>
    </div>
  )
}
