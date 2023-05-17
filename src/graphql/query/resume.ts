import { gql } from '@apollo/client'

export const GET_RESUME = gql`
  query {
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
  }
`