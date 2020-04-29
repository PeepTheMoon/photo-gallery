import React, { Component } from 'react'

export default class OptionList extends Component {
    render() {
        return (
            <select className="creature-filter" onChange={this.props.onChange}>
              <option value="" defaultValue>
                {this.props.dropDown}
              </option>
              {
                  this.props.list
                  .map(unique => {
                      if (this.props.modifier === 'Horns') {
                          return <option value={unique}>{unique} 
                          {' ' + this.props.modifier}</option>
                      } else {
                        return <option value={unique}>{unique.charAt(0).toUpperCase() + unique.slice(1)} 
                        {this.props.modifier}</option>
                      }
                  })
              }
            </select>
        )
    }
}
