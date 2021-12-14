import {gql} from '@apollo/client';

export const GET_FILMS = gql`
  query GetAllData {
    allFilms {
      films {
        id
        title
        releaseDate
        openingCrawl
      }
    }
  }
`;

export const GET_FILM = gql`
  query GetAllData($filmId: ID) {
    film(id: $filmId) {
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
`;

export const GET_CHARACTER = gql`
  query GetAllData($characterId: ID) {
    person(id: $characterId) {
      id
      name
      birthYear
      height
      mass
      homeworld {
        name
      }
      filmConnection {
        films {
          id
          title
        }
      }
    }
  }
`;