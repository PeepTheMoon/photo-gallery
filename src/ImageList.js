import React, { Component } from 'react';
import ImageItem from './ImageItem.js';

export default class ImageList extends Component {
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
                            .filter(creature => {
                                if (!this.props.horns) return true;
                                //else
                                return creature.horns === Number(this.props.horns)
                            })
                            .filter(creature => {
                                if (!this.props.title) return true;
                                //else
                                return creature.title === this.props.title
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
