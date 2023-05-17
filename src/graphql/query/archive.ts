import { gql } from '@apollo/client'

export const GET_ARCHIVE = gql`
  query {
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