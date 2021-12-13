import {gql} from '@apollo/client';

export const GET_FILMS = gql`
  query GetAllData {
    allFilms {
      films {
        id
        title
        releaseDate
        openingCrawl
        speciesConnection {
          totalCount
        }
        planetConnection {
          totalCount
        }
        vehicleConnection {
          totalCount
        }
        characterConnection {
          characters {
            id
            name
          }
        }
      }
    }
  }
`;
