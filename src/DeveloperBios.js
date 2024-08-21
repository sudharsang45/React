import React from 'react'
 
function DeveloperBios(props) {
   return (
       <div className="card d-inline-block text-dark">
           <div className="card-body">
               <h1 className="card-title"> { props.title } </h1>
               <p className="card-text">
                   <span className="bold">Favorite Language: { props.favoriteLanguage }</span>
               </p>
               <p className="card-text">
                   <span className="bold">Year Started: { props.yearStarted }</span>
            
               </p>
            
           </div>
       </div>
   );
}
 
export default DeveloperBios