import React from 'react'; 


const featuredComponent = (props) => {
    return(
       <div className ="featured_component">
          <h1>{props.title}</h1> 
       </div> 
    );
}


export default featuredComponent; 