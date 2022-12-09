import { Component } from "react";
import Card from "../card/card.component";

import './card-list.styles.css';

class CardList extends Component {

    render() {
        const { cats } = this.props;
        /* [ { name: 'Pratik' }, { name: 'Jash' } ] */
        return (
            <div className='card-list'>
                {
                    /* Iterate over filteredcats instead of original one so that we don't modify the original */
                    cats.map((cat) => {

                        return (
                            <Card cat={cat} />
                        )
                    }) 
                }
            </div>
        )
    }
}

export default CardList;