import React, { Component } from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";


const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <header>
          Countries
        </header>
      </ApolloProvider>
    );
  }
}

export default App;
