import React, { Component } from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/"
});

function Continents() {
  return <h3>Continents</h3>;
}

function Countries() {
  return <h3>Countries</h3>;
}

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
