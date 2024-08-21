import React from 'react';
import Developer from './Developer';
import DeveloperBios from './DeveloperBios';

export class DisplayBios extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            developers: [
                new Developer(1, 'Sudharsan Ganesan', 'Python', 2018),
                new Developer(2, 'John Smith', 'Assembly', 1993)
            ]
        };
    }

    render(){
        return(
            this.state.developers.map(dev => <DeveloperBios developer={dev} key={dev.id}/>)
        )
    }
}

export default DisplayBios;