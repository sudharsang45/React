import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Developer from './Developer';

function AddDeveloper () {
   /* constructor(props){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            favoriteLanguage: '',
            yearStarted: null
        }
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }   */
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [favoriteLanguage, setFavoriteLanguage] = useState('');
    const [yearStarted, setYearStarted] = useState(null);

    /*const clearForm = () => {
        setFirstName('');
        setLastName('');
        setFavoriteLanguage('');
        setYearStarted(null);
        document.getElementById('devForm').reset();
    }*/

    const handleSubmit = (event) => {
        event.preventDefault();
        /*this.props.handleNewDeveloper(new Developer(null, this.state.firstName, this.state.lastName,
                                        this.state.favouriteLanguage, this.state.yearStarted)
        );*/

        let newDev = new Developer(null, firstName, lastName, favoriteLanguage, yearStarted);

        fetch('https://dev-bios-api-dot-cog01hprmn542jqme4w772bk1dxpr.uc.r.appspot.com/developers/add', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newDev)    
            }
        )  
        .then(() => navigate('/developers'))
        .catch(err => console.log(err));            
    }

    return  (
        <div className="container">
            <h1> ADD Developer Bio</h1>
            <div className="row">
                <div className="col-mid-6">
                    <form id="devForm" onSubmit={ handleSubmit }>
                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" data-testid="firstName" name="firstName"  className="form-control" onChange={ (event) => setFirstName(event.target.value) } />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" data-testid="lastName" name="lastName"  className="form-control" onChange={ (event) => setLastName(event.target.value) } />
                        </div>
                        <div className="form-group">
                            <label htmlFor="favoriteLanguage">Favorite Language</label>
                            <input type="text" data-testid="favoriteLanguage" name="favoriteLanguage"  className="form-control" onChange={ (event) => setFavoriteLanguage(event.target.value) } />
                        </div>
                        <div className="form-group">
                            <label htmlFor="yearStarted">Year Started</label>
                            <input type="text" data-testid="yearStarted" name="yearStarted"  className="form-control" onChange={ (event) => setYearStarted(event.target.value) } />
                        </div>
                        <div className="form-group">
                            <button type="submit"  className="btn btn-success" >Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
    
}


export default AddDeveloper