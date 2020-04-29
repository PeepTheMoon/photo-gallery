import React, { Component } from 'react';
import creatureData from './data.js';
import Header from './Header.js';
import ImageList from './ImageList.js';

export default class App extends Component {
    state = { selected: null };

    handleChange = (e) => {
      this.setState({ selected: e.target.value});
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

          {/* <section className="creature-list-section">
            <ul className="creatures">
              {
                creatureData
                .filter(creature => {
                  if (!this.state.selected) return true;
                  //else
                  return creature.keyword === this.state.selected;
                })
              }
            </ul>
          </section> */}
          <ImageList data={ creatureData } select={ this.state.selected }>
            
          </ImageList>
        </main>
        
      </div>
    )
  }
}
