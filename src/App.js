import React, { Component } from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { InMemoryCache, defaultDataIdFromObject } from 'apollo-cache-inmemory';

import Continents from './pages/Continents';
import Countries from './pages/Countries';


const cache = new InMemoryCache({
  dataIdFromObject: object => {
    console.debug('DEBUG: object.__typename', object.__typename)
    switch (object.__typename) {
      case 'continent': return `continent:${object.code}`; // use `continent` prefix and `code` as the primary key
      case 'country': return `country:${object.code}`; // use `country` prefix and `code` as the primary key
      default: return defaultDataIdFromObject(object); // fall back to default handling
    }
  }
});

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/",
  cache
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <header>
            Countries App
          </header>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/continents/">Continents</Link>
            </li>
            <li>
              <Link to="/countries/">Countries</Link>
            </li>
          </ul>
          <Route path="/continents" exact component={Continents} />
          <Route path="/countries" exact component={Countries} />
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
