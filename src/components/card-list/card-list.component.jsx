import Card from "../card/card.component";

import './card-list.styles.css';

const CardList = ({ cats }) => {

    /* [ { name: 'Lucy' }, { name: 'Jenny' } ] */
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

export default CardList;