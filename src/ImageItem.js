import React, { Component } from 'react';

export default class ImageItem extends Component {
    render() {
        return (
        <li className="creature-card">
            <div>
                <h2>Title: {this.props.creature.title}</h2>
                <p className="creature-description">Description: {this.props.creature.description}</p>
                <p className="creature-horns">Has {this.props.creature.horns} horns!</p>
            </div>
            <div className="creature-image">
                <img
                    alt={this.props.creature.keyword}
                    src={this.props.creature.url} />
            </div>
        </li>
        )
    }
}
