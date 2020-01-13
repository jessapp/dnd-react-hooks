import React from 'react'

const Card = ({title, items}) => {
    const random_item = items[Math.floor(Math.random()*items.length)];
    console.log(random_item)
      return (
        <div>
            <h1>{title}: {random_item.name}</h1>
        </div>
      )
};

export default Card