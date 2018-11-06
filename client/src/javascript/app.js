import React, { Component } from 'react';

import Layout from './components/layout';

import { createApolloClient } from './libs/client';
import { ApolloProvider } from 'react-apollo';


export default class App extends Component{

  apollo(){
    return createApolloClient();
  }

  render(){
    return (
      <ApolloProvider client={this.apollo()}>
        <Layout />
      </ApolloProvider>
    );
  }
}
