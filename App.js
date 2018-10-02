import React from 'react';
import Navigation from 'src/core/Navigation';
import { initializeDatabase } from 'src/core/DataBaseManager';
import Expo from 'expo';

export default class App extends React.Component {

  render() {
    return (
      <Navigation />
    );
  }
}

Expo.registerRootComponent(App);
initializeDatabase();
