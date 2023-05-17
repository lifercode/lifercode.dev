import { Card as CardType } from "@/types";
import styles from './card.module.css'
import Image from "next/image";

export default function Card({
  date,
  title,
  subtitle,
  text,
  links,
  skills,
  url,
  image
}: CardType) {
  return (
    <div className={styles.wrapper}>
      <a href={url} target="_blank">
        <div>
          <div className={styles.container}>
            <div className={styles.side}>
              {date ? (
                <span>{date}</span>
              ) : null}

              {image ? (
                <Image
                  className={styles.image}
                  src={image?.url}
                  alt={title}
                  width={120}
                  height={77}
                  priority
                />
              ) : null}
            </div>
            <div className={styles.content}>
              <h3 className={styles.title}>
                {title}
                <span>
                  <Image
                    src="/icons/arrow.svg"
                    alt={title}
                    width={15}
                    height={15}
                    priority
                  />
                </span>
              </h3>
              <h4 className={styles.subtitle}>{subtitle}</h4>
              <p className={styles.text}>{text}</p>
              <ul className={styles.link_list}>
                {links?.map((link, index) => (
                  <li key={index} className={styles.link_item}>
                    <Image
                      className={styles.link_icon}
                      src="/icons/link.svg"
                      alt={link.label}
                      width={15}
                      height={15}
                      priority
                    />
                    <a href={link.url} target="_blank">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <ul className={styles.tag_list}>
                {skills.map((tag) => (
                  <li key={tag.id} className={styles.tag_item}>
                    {tag.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </a>
    </div>
  )
}