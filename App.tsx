import React, { useEffect } from "react";
import RootNavigator from "./src/navigations/RootNavigator";
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import SplashScreen from "react-native-splash-screen";
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const App = () => {
  useEffect(() => {
    SplashScreen.hide()
  }, [])

  //The url provided is not working from Postman and the client either (works only on browser)'https://graphql.org/swapi-graphql'
  //I'm using https://swapi-graphql.netlify.app/.netlify/functions/index instead, same data and schema (I found it in Apollo Client documentation)
  const client = new ApolloClient({
    uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
    cache: new InMemoryCache()
  })

  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    </ApolloProvider>
  );
};

export default App;

AppRegistry.registerComponent(appName, () => App);