import React from 'react'

const TitleCard = ({title, currentItem, callback}) => {
      return (
          <div>
            <div class="card">
                <div class="card-body">
                    <h1 class="card-title">Your { title } is: { currentItem.name }</h1>
                    <p class="card-text">{ currentItem.desc }</p>
                </div>

                <div class="col-sm-3">
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