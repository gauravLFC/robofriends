import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    const cardComponents = robots.map(user => <Card key={user.id} name={user.name} email={user.email} id={user.id} />)
    return (
        <div>
            {cardComponents}
        </div>

    );
}

export default CardList