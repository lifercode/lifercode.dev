import Image from 'next/image'
import styles from './section.module.css'
import { SectionProps } from '@/types'

export default function Section({
  ref,
  children,
  viewMore,
  id,
  href
}: SectionProps) {
  return (
    <div ref={ref} id={id} className={styles.section}>
      {children}
      {viewMore ? (
        <a href={href} className={styles.viewMore}>
          <span>{viewMore}</span>
          <Image
            src="/icons/arrow-right.svg"
            alt="arrow-right"
            width={15}
            height={15}
            priority
          />
        </a>
      ) : null}
    </div>
  )
}