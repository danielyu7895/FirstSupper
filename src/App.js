import React from 'react';
import Navbar from "./Components/NavBar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "./Styles/Profile.css"

// import Home from './pages';
// import SignUpForm from './pages/SignUpForm';
// import Services from './pages/services';
// import Contact from './pages/contact';
// import SignUp from './pages/signup';
// import SignUpForm from "./Pages/SignUpForm"
// import Form from "./Components/Form";
import SignUpForm from "./Pages/SignUpForm";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import SignUpForm2 from "./Pages/SignUpForm2";
import Profile from "./Pages/Profile";
import Settings from "./Pages/Settings";
import YourEvents from "./Pages/YourEvents";

function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/SignUpForm' component={SignUpForm} />
                <Route path='/SignUpForm2' component={SignUpForm2} />
                <Route path='/Profile' component={Profile} />
                <Route path='/Settings' component={Settings} />
                <Route path='/YourEvents' component={YourEvents} />
            </Switch>
            <Footer/>
        </Router>
    );
}

export default App;
