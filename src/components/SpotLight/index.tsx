'use client'

import useMousePosition from '@/hooks/useMousePosition'
import styles from './spotlight.module.css'

export default function SpotLight() {
  const position = useMousePosition()

  const style = {
    background: `radial-gradient(600px at ${position.x}px ${position.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`
  }

  return (
    <div className={styles.spotlight} style={style} />
  )
}
