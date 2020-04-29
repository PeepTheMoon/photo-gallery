import React, { Component } from 'react';
import Horns from './Horns.js';

export default class Horns extends Component {
    render() {
        return (
            <div>
                <section className="creature-list-section">
                    <ul className="creatures">
                        {
                        this.props.data
                            .filter(creature => {
                                if (!this.props.select) return true;
                                //else
                                return creature.keyword === this.props.select;
                            })
                            .map(creature => {
                            return <ImageItem creature={creature} />

                            })
                        }
                    </ul>
                </section>
            </div>
        )
    }
}