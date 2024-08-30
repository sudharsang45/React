import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import AuthContext from '../Context';

test('renders nav bar', () => {
    const {getByText} = render(<Router><Navbar /></Router>);
    const linkElement = getByText(/Home/i);
    expect(linkElement).toBeInTheDocument();
});

test('nav route with href attribute', () => {
    render(<Router><Navbar /></Router>);
    expect(screen.getByRole('link', {name: 'Home'})).toHaveAttribute('href','/');
    expect(screen.getByRole('link', {name: 'Developers'})).toHaveAttribute('href','/developers');
    expect(screen.getByRole('link', {name: 'Login'})).toHaveAttribute('href','/login'); 
});

test('navbar logout test with context', () => {
    
    const fakeContext = {
        isLoggedIn: true,
        setIsLoggedIn: jest.fn()
    }

    const {getByText} = render(
        <AuthContext.Provider value={ fakeContext }>
            <Router>
                <Navbar />
            </Router>
        </AuthContext.Provider>
    )

    expect(screen.getByRole('link', {name: 'Logout'})).toHaveAttribute('href','/');
    expect(screen.getByRole('link', {name: 'AddDevelopers'})).toHaveAttribute('href','/developers/add');

    fireEvent.click(getByText('Logout'));
    expect(fakeContext.setIsLoggedIn).toHaveBeenCalledWith(false);

});
