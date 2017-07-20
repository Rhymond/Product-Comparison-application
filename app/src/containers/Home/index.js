import React from 'react';
import Products from '../../components/Products';

export default class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <h1>Home</h1>

        <Products/>
      </div>
    );
  }
}
