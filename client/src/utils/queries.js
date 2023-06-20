import { gql } from '@apollo/client';


export const SHOW_PROFILE = gql`
  {
    user {
      username
       posts {
        _id
        title
      }
    }
  }
`;
