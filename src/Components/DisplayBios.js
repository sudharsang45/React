import React, { useEffect, useState } from 'react';
//import Developer from './Developer';
import DeveloperBios from './DeveloperBios';

/*
export class DisplayBios extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            developers: [
                new Developer(1, 'Sudharsan', 'Ganesan', 'Python', 2018),
                new Developer(2, 'John', 'Smith', 'Assembly', 1993)
            ]
        };
    }

    render(){
        return(
            this.state.developers.map(dev => <DeveloperBios developer={dev} key={dev.id}/>)
        )
    }
}*/

function DisplayBios(props) {
    const [developers, setDevelopers] = useState([]);

    useEffect(()=> {
        fetch('https://dev-bios-api-dot-cog01hprmn542jqme4w772bk1dxpr.uc.r.appspot.com/developers/all')
        .then((response) => response.json())
        .then((data) => {
          setDevelopers(data)
          })
        .catch(err   => console.log(err)) 
    },[])

    return developers.map(dev => <DeveloperBios developer={dev} key={dev.id}/>)
}

export default DisplayBios;