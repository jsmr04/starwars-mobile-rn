// export interface Root {
//   data: Data;
// }
export interface Root {
  allFilms: AllFilms;
}
export interface AllFilms {
  films?: FilmsEntity[] | null;
}
export interface Film {
  film: FilmsEntity
}

export interface FilmsEntity {
  id: string;
  title: string;
  releaseDate: string;
  openingCrawl: string;
  speciesConnection: Connection;
  planetConnection: Connection;
  vehicleConnection: Connection;
  characterConnection: CharacterConnection;
}
export interface Connection {
  totalCount: number;
}
export interface CharacterConnection {
  characters?: CharactersEntity[] | null;
}
// export interface CharactersEntity {
//   id: string;
//   name: string;
// }

export interface Character {
  person: CharactersEntity;
}

export interface CharactersEntity {
  id: string;
  name: string;
  birthYear: string;
  height: number;
  mass: number;
  homeworld: Homeworld;
  filmConnection: FilmConnection;
}

export interface Homeworld {
  name: string;
}

export interface FilmConnection {
  films?: (FilmsEntity)[] | null;
}
