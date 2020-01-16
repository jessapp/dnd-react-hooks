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
            <div className="card">
                <div className="card-body">
                    <h1 className="card-title">Your { title } is: { currentItem.name }</h1>
                    <p className="card-text">{ description }</p>
                </div>

                <div>
                    <button className="btn btn-primary"
                        onClick={ callback }
                    >
                        Get another { title }
                    </button>
                </div>
                <br />
            </div>

          </div>
      )
};

export default TitleCard