import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './common/Home';
import About from './common/About';
import PrivateArea from "./user/PrivateArea";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Admin from "./admin/Admin";
import Customers from "./admin/Customers";
import Employees from "./admin/Employees";
import Messages from "./admin/Messages";
import Vehicles from "./cars/Vehicles";
import Statistics from "./user/Statistics";
import License from "./user/License";
import Feedback from "./user/Feedback";
import {NotFound} from "./common/NotFound";
import Vehicle from "./cars/Vehicle";
import Parks from "./parks/Parks";
import Park from "./parks/Park";
import Navbar from "./common/Navbar";

function App() {

    return (
        <BrowserRouter>
            <Navbar/>
            <Switch>
                <Route path={'/'} exact component={Home}/>
                <Route path={'/about'} exact component={About}/>
                <Route path={'/login'} exact component={Login}/>
                <Route path={'/logout'} exact component={Logout}/>
                <Route path={'/registration'} exact component={Registration}/>

                <Route path={'/admin'} exact component={Admin}/>
                <Route path={'/admin/customers'} exact component={Customers}/>
                <Route path={'/admin/employees'} exact component={Employees}/>
                <Route path={'/admin/messages'} exact component={Messages}/>

                <Route path={'/customer'} exact component={PrivateArea}/>
                <Route path={'/customer/vehicles'} exact component={Vehicles}/>
                <Route path={'/customer/vehicles/:id'} exact component={Vehicle}/>
                <Route path={'/customer/statistics'} exact component={Statistics}/>
                <Route path={'/customer/license'} exact component={License}/>
                <Route path={'/customer/feedback'} exact component={Feedback}/>
                <Route path={'/customer/parks'} exact component={Parks}/>
                <Route path={'/customer/parks/:id'} exact component={Park}/>
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    );
}

export var menuItems = {
    leftItems:
        [{
            link: '/',
            name: 'Главная'
        },
        {
            link: '/about',
            name: 'О нас'
        }],
    rightItems: {
        Login: {
            link: '/login',
            name: 'Войти'
        },
        Logout: {
            link: '/logout',
            name: 'Выйти'
        }
    }
}

export default App;
