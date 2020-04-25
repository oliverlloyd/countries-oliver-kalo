import React, { Component } from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { InMemoryCache, defaultDataIdFromObject } from 'apollo-cache-inmemory';

import { Navigation } from './components/Navigation';
import { Header } from './components/Header';

import ContinentsPage from './pages/ContinentsPage';
import CountriesPage from './pages/CountriesPage';
import CountryPage from './pages/CountryPage';


// TODO: extract this and maybe also ApolloProvider out to a separate file to keep things readable
const cache = new InMemoryCache({
  dataIdFromObject: object => {
    switch (object.__typename) {
      case 'Continent': return `continent:${object.code}`; // use `continent` prefix and `code` as the primary key
      case 'Country': return `country:${object.code}`; // use `country` prefix and `code` as the primary key
      default: return defaultDataIdFromObject(object); // fall back to default handling
    }
  }
});

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/", // TODO: Pull in from an env var
  cache
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <Header />
          <Navigation />
          {/* TODO: Put routes in separate file */}
          <Switch>
            <Route path="/continents" exact component={ContinentsPage} />
            <Route path="/countries" exact component={CountriesPage} />
            <Route path="/countries/:code" exact component={CountryPage} />
          </Switch>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
