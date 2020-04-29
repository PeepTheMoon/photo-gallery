import React, { Component } from 'react';
import creatureData from './data.js';
import Header from './Header.js';
import ImageList from './ImageList.js';
import './App.css';

export default class App extends Component {
    state = { selected: null, horns: null };

    handleChange = (e) => {
      this.setState({ selected: e.target.value});
    };

    handleHornChange = (e) => {
      this.setState({ horns: e.target.value});
    };

  render() {
    return (
      <div>
        <Header>
          <h1>Horned Creatures of the Wild and Imagination</h1>
        </Header>

        <main>
          <section className="creature-options">
            <select className="creature-keyword-filter" onChange={this.handleChange}>
              <option value="" defaultValue>
                All Creatures
              </option>
              <option value="narwhal">Narwhal</option>
              <option value="rhino">Rhinocerous</option>
              <option value="unicorn">Unicorn</option>
              <option value="unilego">Unilego</option>
              <option value="triceratops">Triceratops</option>
              <option value="markhor">Markhor</option>
              <option value="mouflon">Mouflon</option>
              <option value="addax">Addax</option>
              <option value="chameleon">Chameleon</option>
              <option value="lizard">Lizard</option>
              <option value="dragon">Dragon</option>
            </select>
          </section>

          <section className="creature-horns">
            <select className="creature-horn-filter" onChange={this.handleHornChange}>
            <option value="" defaultValue>
                All Horn Quantities
              </option>
              <option value="1">One Horn</option>
              <option value="2">Two Horns</option>
              <option value="3">Three Horns</option>
              <option value="100">ONE HUNDRED Horns</option>
            </select>
          </section>

          <ImageList data={ creatureData } select={ this.state.selected } horns={ this.state.horns }/>
        </main>
        
      </div>
    )
  }
}
