import React from 'react';
import Developer from './Developer';

class AddDeveloper extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            favouriteLanguage: '',
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
    }

    clearForm = () => {
        this.setState({firstName: '', lastName: '', favouriteLanguage: '', yearStarted: null});
        document.getElementById('devForm').reset();
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.handleNewDeveloper(new Developer(null, this.state.firstName, this.state.lastName,
                                        this.state.favouriteLanguage, this.state.yearStarted)
        );

        this.clearForm();
    }

    render(){
        return  (
            <div className="container">
                <h1> ADD Developer Bio</h1>
                <div className="row">
                    <div className="col-mid-6">
                        <form id="devForm" onSubmit={ this.handleSubmit }>
                            <div className="form-group">
                                <label htmlFor="firstName">First Name</label>
                                <input type="text" data-testid="firstName" name="firstName"  className="form-control" onChange={this.handleChange } />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name</label>
                                <input type="text" data-testid="lastName" name="lastName"  className="form-control" onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="favoriteLanguage">Favorite Language</label>
                                <input type="text" data-testid="favoriteLanguage" name="favoriteLanguage"  className="form-control" onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="yearStarted">Year Started</label>
                                <input type="text" data-testid="yearStarted" name="yearStarted"  className="form-control" onChange={this.handleChange  } />
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
    
}


export default AddDeveloper