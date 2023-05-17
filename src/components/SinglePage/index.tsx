import SpotLight from '@/components/SpotLight'
import { SinglePageProps } from '@/types'
import styles from './singlepage.module.css'

export default function SinglePage({
  title,
  children
}: SinglePageProps) {
  return (
    <main>
      <SpotLight />
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            {title}
          </h1>
          <p>
            <a href="/">
              <code>Back</code>
            </a>
          </p>
        </div>
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </main>
  )
}
