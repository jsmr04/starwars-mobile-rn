import React, { useEffect } from "react";
import RootNavigator from "./src/navigations/RootNavigator";
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import SplashScreen from "react-native-splash-screen";
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import * as config from "~configuration";

const App = () => {
  useEffect(() => {
    SplashScreen.hide()
  }, [])

  const client = new ApolloClient({
    uri: config.BASE_URL,
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