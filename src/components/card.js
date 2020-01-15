import React from 'react';
import {classDescriptionMapping, raceDescriptionMapping} from '../constants';


const TitleCard = ({title, currentItem, callback}) => {
    const slug = currentItem ? currentItem.slug : '';
    let description = null;
    if (title === 'class'){
        description = classDescriptionMapping[slug]
    } else {
        description = raceDescriptionMapping[slug]
    }



      return (
          <div>
            <div class="card">
                <div class="card-body">
                    <h1 class="card-title">Your { title } is: { currentItem.name }</h1>
                    <p class="card-text">{ description }</p>
                </div>

                <div>
                    <button class="btn btn-primary"
                        onClick={ callback }
                    >
                        Get another { title }
                    </button>
                </div>
            </div>

          </div>
      )
};

export default TitleCard