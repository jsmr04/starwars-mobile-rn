import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { gql, useQuery } from "@apollo/client";
import { Root } from "~types";

const GET_FILMS = gql`
  query GetAllData {
    allFilms {
      films {
        title
        releaseDate
        openingCrawl
      }
    }
  }
`;

const Home = () => {

// const { loading, error, data: StarWarsData } = useQuery<Root>(GET_FILMS);
// const films = StarWarsData?.allFilms?.films

//   useEffect(() => {
//     console.log(StarWarsData)
//   }, [films]);
  
//   useEffect(() => {
//     console.log(error)
//   }, [error]);

//   if (!loading) console.log(data)

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        {/* {loading && <Text>Loading...</Text>}
        {films && films.map((x, index)=>(
            <Text key={index.toString()}>{x.title}</Text>
        ))} */}
        <Text>TEST</Text>
      </View>
    </SafeAreaView>
      
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

export default Home;
