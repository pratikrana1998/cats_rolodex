import { Component } from "react";

import './card.styles.css';

class Card extends Component {
    
    /* This renders a specific card */
    render() {
        const { name, email, id } = this.props.cat;                             /* De-structuring */

        return (
            <div className="card-container" key={id}>
                <img 
                    alt={`cat ${name}`} 
                    src={`https://robohash.org/${id}?set=set4&size=180x180`} 
                />
                <h2>{ name }</h2>
                <p>{ email }</p>
            </div>
        )
    }
}

export default Card;