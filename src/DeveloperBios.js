import React from 'react'
 
function DeveloperBios(props) {
   return (
       <div className="card d-inline-block text-dark">
           <div className="card-body">
               <h1 className="card-title"> { props.developer.title } </h1>
               <p className="card-text">
                   <span className="bold">Favorite Language: { props.developer.favouriteLanguage }</span>
               </p>
               <p className="card-text">
                   <span className="bold">Year Started: { props.developer.yearStarted }</span>
            
               </p>
            
           </div>
       </div>
   );
}
 
export default DeveloperBios