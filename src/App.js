import React, { Component } from 'react';
import creatureData from './data.js';
import Header from './Header.js';
import ImageList from './ImageList.js';
import OptionList from './OptionList.js';
import './App.css';

export default class App extends Component {
    state = { selected: null, horns: null , title: null};

    handleChange = (e) => {
      this.setState({ selected: e.target.value});
    };

    handleHornChange = (e) => {
      this.setState({ horns: e.target.value});
    };

    handleTitleChange = (e) => {
      this.setState({ title: e.target.value});
    };

  render() {
    return (
      <div>
        <Header>
          <h1>Horned Creatures of the Wild and Imagination</h1>
        </Header>

        <main>

          <section className="creature-options">
            <OptionList
                list={[...new Set(creatureData.map(creature => creature.keyword))]}
                onChange={this.handleChange}
                dropDown={'All Creatures'}
                modifier={''}
            />
            <OptionList
                list={[...new Set(creatureData.map(creature => creature.horns))]}
                onChange={this.handleHornChange}
                dropDown={'All Horn Quantities'}
                modifier={'Horns'}
            />
            <OptionList
                list={[...new Set(creatureData.map(creature => creature.title))]}
                onChange={this.handleTitleChange}
                dropDown={'All Titles'}
                modifier={''}
            />
          </section>
          <ImageList 
              data={ creatureData } 
              select={ this.state.selected } 
              horns={ this.state.horns } 
              title={ this.state.title }/>
        </main>
        
      </div>
    )
  }
}
