import React from 'react';
import './Hemisphere.css'
import north from './images/north.jpg';
import south from './images/south.jpg';

const hemisphereConfig = {
    Northern: {
        text: 'This is the northern hemisphere',
        picture: north
    },
    Southern: {
        text: 'This is the southern hemisphere',
        picture: south
    }
}

const HemisphereDisplay = ({ latitude }) => {
    const hemisphere = latitude > 0 ? 'Northern' : 'Southern';
    const { text, picture } = hemisphereConfig[hemisphere];

    return(
        <div className={ hemisphere }>
            <div className='ui raised text container segment'>
                <div className='image'>
                    <img src={picture} alt='picture' style={{height:100, width:210}}></img>
                </div>
                <div className='ui teal bottom attached label'>
                    { text } 
                </div>                
            </div>
        </div>
    )
}

export default HemisphereDisplay;