import { ErrorMessageProps } from "@/types"
import styles from './error.module.css'

export default function ErrorMessage({
  data
}: ErrorMessageProps) {
  return (
    <p className={styles.error}>
      {`Error! ${data}`}
    </p>
  )
}
