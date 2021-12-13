// export interface Root {
//   data: Data;
// }
export interface Root {
  allFilms: AllFilms;
}
export interface AllFilms {
  films?: FilmsEntity[] | null;
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
export interface CharactersEntity {
  id: string;
  name: string;
}
