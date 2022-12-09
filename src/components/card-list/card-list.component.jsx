import { Component } from "react";

class CardList extends Component {

    render() {
        const { monsters } = this.props;
        /* [ { name: 'Pratik' }, { name: 'Jash' } ] */
        return (
            <div>
                {
                    /* Iterate over filteredMonsters instead of original one so that we don't modify the original */
                    monsters.map((monster) => {
                        return (
                        <div key={monster.id}>
                        <h1>{monster.name}</h1>
                        </div>
                        )
                    }) 
                }
            </div>
        )
    }
}

export default CardList;