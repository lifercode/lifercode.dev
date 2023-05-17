import { gql } from '@apollo/client'

export const GET_HOME = gql`
  query {
    abouts(orderBy: publishedAt_DESC) {
      id
      title
      subtitle
      resume
      text
      social {
        ... on Social {
          id
          label
          icon
          url
        }
      }
    }
    experiences(orderBy: publishedAt_DESC) {
      id
      title
      subtitle
      date
      url
      text
      links {
        ... on Link {
          id
          label
          url
        }
      }
      skills {
        ... on Skill {
          id
          label
        }
      }
    }
    projects(orderBy: publishedAt_DESC) {
      id
      title
      url
      text
      image {
        url
      }
      links {
        ... on Link {
          id
          label
          url
        }
      }
      skills {
        ... on Skill {
          id
          label
        }
      }
    }
  }
`