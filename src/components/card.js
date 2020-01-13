import React from 'react'

const Card = ({ classes }) => {
    console.log(classes);

  return (
    <div>
        { classes.map((cls) => (
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{cls.name}</h5>
              </div>
            </div>
          )) }
    </div>
  )
};

export default Card