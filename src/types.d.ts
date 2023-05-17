type Link = {
  label: string
  url: string
}

type Tag = {
  id: string
  label: string
}

type Image = {
  url: string
}

export type Card = {
  id: string
  date?: string
  title: string
  subtitle?: string
  text: string
  image?: Image
  url: string
  links?: Link[]
  skills: Tag[]
}

export type CardListProps = {
  data: Card[]
}

// ---

export type SocialType = {
  id: string
  label: string
  icon: string
  url: string
}

type Data = {
  social: SocialType[]
  title: string
  subtitle: string
  resume: string
  text: string
}

export type HeaderProps = {
  values: boolean[]
  data: Data
}

// ---

export type SectionProps = {
  ref: any
  children: any
  viewMore?: any
  id: any
  href?: any
}




export type SinglePageProps = any

export type ErrorMessageProps = {
  data: string
}