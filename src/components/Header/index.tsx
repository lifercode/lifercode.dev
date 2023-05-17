import { useState, useEffect } from "react"
import Image from 'next/image'

import styles from './header.module.css'
import { HeaderProps, SocialType } from "@/types"

export default function Header({ values, data }: HeaderProps) {
  const localActive = window && window.location.hash ? window.location.hash : '#about'
  const [active, setActive] = useState(localActive)
  const isActive = (value: string) => active === value ? styles.active : ''

  useEffect(() => {
    values[2] && setActive('#projects')
    values[1] && setActive('#experience')
    values[0] && setActive('#about')
  }, [values])

  return (
    <div>
      <h1 className={styles.title}>{data?.title}</h1>
      <h2 className={styles.subtitle}>{data?.subtitle}</h2>
      <p className={styles.text}>{data?.resume}</p>
      <ul className={styles.menu}>
        <li className={isActive('#about')}>
          <a href="#about" onClick={() => setActive('#about')}>
            <span className={styles.nav_indicator} />
            <span>About</span>
          </a>
        </li>
        <li className={isActive('#experience')}>
          <a href="#experience" onClick={() => setActive('#experience')}>
            <span className={styles.nav_indicator} />
            <span>Experience</span>
          </a>
        </li>
        <li className={isActive('#projects')}>
          <a href="#projects" onClick={() => setActive('#projects')}>
            <span className={styles.nav_indicator} />
            <span>Projects</span>
          </a>
        </li>
      </ul>
      <ul className={styles.social_menu}>
        {data?.social.map((item: SocialType) => (
          <li key={item.id}>
            <a href={item.url} title={item.label} target="_blank">
              <Image
                src={`/icons/${item.icon}.svg`}
                alt={item.label}
                width={24}
                height={24}
                priority
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

