import React from 'react'; 
import igIcon from './iconig.png'
import twIcon from './icontw.png'
import gitIcon from './icongit.png'
import './SocialMedia.css'

const SocialMedia = () => {


    return(
        <div>

            <img src = {igIcon} alt = "logo_social" className ="logo_social"></img>
            <img src = {twIcon} alt = "logo_social" className ="logo_social"></img>
            <img src = {gitIcon} alt = "logo_social" className ="logo_social"></img>
          
        </div>
    );

}

export default SocialMedia; 