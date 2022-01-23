import React, {Component} from 'react';

import Routes from './src/navigation/Routes';
import {AuthProvider} from './src/navigation/AuthProvider';

export default class App extends Component {
  render() {
    return (
      <AuthProvider>
        <Routes />
      </AuthProvider>
    );
  }
}
