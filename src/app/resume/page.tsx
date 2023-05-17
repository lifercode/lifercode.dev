'use client'

import { ApolloProvider, useQuery } from '@apollo/client'
import { client } from '@/lib/apollo'
import Loading from '@/components/Loading'
import ErrorMessage from '@/components/ErrorMessage'
import { Card as CardType, SocialType } from '@/types'

import React from 'react'
import {
  Page,
  Text,
  View,
  Document,
  PDFViewer,
  Link
} from '@react-pdf/renderer'
import { GET_HOME } from '@/graphql/query/home'
import styles from './styles'

const getBreakProps = (one: number, two: number) => {
  const isBreak = one === 0 && two === 4

  return ({
    style: isBreak ? styles.itemBreak : styles.item,
    break: isBreak
  })
}

function Resume() {
  const { loading, error, data } = useQuery(GET_HOME)
  const owner = data?.abouts[0].title || ''

  const documentOptions = {
    title: owner,
    author: owner,
    creator: owner,
    producer: owner
  }

  const listOfSections = [
    {
      label: 'Experiences',
      data: data?.experiences
    },
    {
      label: 'Projects',
      data: data?.projects
    }
  ]

  if (loading) return <Loading />
  if (error) return <ErrorMessage data={error.message} />

  return (
    <PDFViewer style={styles.container}>
      <Document {...documentOptions}>
        <Page style={styles.page}>
          <View style={styles.section}>
            <View style={styles.about}>
              <Text style={styles.about_title}>
                {data.abouts[0].title}
              </Text>
              <Text style={styles.about_subtitle}>
                {data.abouts[0].subtitle}
              </Text>
              <Text style={styles.about_resume}>
                {data.abouts[0].resume}
              </Text>
              <Text style={styles.about_text}>
                {data.abouts[0].text}
              </Text>
              <View style={styles.links}>
                {data.abouts[0].social.map((social: SocialType) => (
                  <Link src={social.url} key={social.id} style={styles.link}>
                    {social.label}
                  </Link>
                ))}
              </View>
            </View>
          </View>
          {listOfSections.map((section, index) => (
            <View key={index} style={styles.section}>
              <Text style={styles.sectionTitle}>
                {section.label}:
              </Text>
              {section.data.map((item: CardType, subindex: number) => (
                <View key={item.id} {...getBreakProps(index, subindex)}>
                  <Text style={styles.date}>{item.date}</Text>
                  <Text style={styles.title}>
                    {item.title}
                  </Text>
                  <Text style={styles.subtitle}>{item.subtitle}</Text>
                  <Text style={styles.text}>{item.text}</Text>
                  <View key={item.id} style={styles.tags}>
                    {item.skills.map((subitem) => (
                      <Text key={subitem.id} style={styles.tag}>
                        {subitem.label}
                      </Text>
                    ))}
                  </View>
                </View>
              ))}
            </View>
          ))}
        </Page>
      </Document>
    </PDFViewer>
  )
}

export default function PageFull() {
  return (
    <ApolloProvider client={client}>
      <Resume />
    </ApolloProvider>
  )
}
