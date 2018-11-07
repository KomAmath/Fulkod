import React, { Component } from 'react';
import types from './types.json';
import './app.css';

class TypeApp extends Component {
  render() {
    return (
      <div>
        <h1>Types in JavaScript</h1>
        {
          types.map(t => {
            return <p key={t.id}>{t.name}</p>;
          })
        }
      </div>
    );
  }
}

export default TypeApp;
