'use client'

import { useInView } from 'react-intersection-observer'
import { ApolloProvider, useQuery } from '@apollo/client'
import Header from '@/components/Header'
import SpotLight from '@/components/SpotLight'
import Section from '@/components/Section'
import { client } from '@/lib/apollo'
import replaceWithBr from '@/utils/replaceWithBr'
import styles from './page.module.css'
import CardList from '@/components/CardList'
import Loading from '@/components/Loading'
import ErrorMessage from '@/components/ErrorMessage'
import { GET_HOME } from '@/graphql/query/home'

const inViewDefault = {
  threshold: 0
}

function Page() {
  const { loading, error, data } = useQuery(GET_HOME)

  const { ref: refSecOne, inView: inViewOne } = useInView(inViewDefault)
  const { ref: refSecTwo, inView: inViewTwo } = useInView(inViewDefault)
  const { ref: refSecThree, inView: inViewThree } = useInView(inViewDefault)

  const options = {
    about: {
      dangerouslySetInnerHTML: {
        __html: replaceWithBr(data?.abouts[0].text || '')
      }
    },
    header: {
      data: data?.abouts[0],
      values: [inViewOne, inViewTwo, inViewThree]
    }
  }

  if (loading) return <Loading />;
  if (error) return <ErrorMessage data={error.message} />;

  return (
    <main className={styles.main}>
      <SpotLight />
      <div className={styles.wrap}>
        <div className={styles.col_fixed}>
          <Header {...options.header}/>
        </div>
        <div className={styles.col}>
          <Section ref={refSecOne} id="about">
            <div className={styles.about}>
              <p {...options.about}/>
            </div>
          </Section>
          <Section
            ref={refSecTwo}
            id="experience"
            href="/resume"
            viewMore="View Full Resume"
          >
            <CardList data={data?.experiences} />
          </Section>
          <Section
            ref={refSecThree}
            id="projects"
            href="/archive"
            viewMore="View Full Project Archive"
          >
            <CardList data={data?.projects} />
          </Section>
        </div>
      </div>
    </main>
  )
}

export default function Home() {
  return (
    <ApolloProvider client={client}>
      <Page />
    </ApolloProvider>
  )
}
