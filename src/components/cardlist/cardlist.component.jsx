import React from 'react';

import Card from '../card/card.component';

import "./cardlist.styles.css";

const CardList = ({ monsters }) => (
    <dive className="cardlist">
        {monsters.map(monster => (
            <Card key={monster.id} monster={monster} />
        ))}
    </dive>
)

export default CardList;