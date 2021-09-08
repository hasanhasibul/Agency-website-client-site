import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AddAdmin from "./Components/Dashboard/AddAdmin/AddAdmin";
import AddSevices from "./Components/Dashboard/AddServices/AddSevices";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import ManageService from "./Components/Dashboard/ManageService/ManageService";
import OrderList from "./Components/Dashboard/OrderList/OrderList";
import Home from "./Components/Home/Home/Home";
import Services from "./Components/Home/Services/Services";
import Login from "./Components/Login/Login";
import Book from "./Components/UserDashboard/Book/Book/Book";
import UserDashboard from "./Components/UserDashboard/UserDashboard/UserDashboard";
import BookingList from './Components/UserDashboard/BookingList/BookingList';
import Review from "./Components/UserDashboard/Review/Review";
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import AdminLogin from './Components/Login/AdminLogin';
import AdminPrivateRoute from './Components/PrivateRoute/AdminPrivateRoute';

export const userContext = createContext();
function App() {
  const [service,setService] = useState([]);
  const [loginInfo,setLoginInfo] = useState({});
  
  return (
    <userContext.Provider value={[service,setService,loginInfo,setLoginInfo]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/AdminLogin">
              <AdminLogin></AdminLogin>
          </Route>
          <AdminPrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </AdminPrivateRoute>
          <Route path="/order-list">
            <OrderList></OrderList>
          </Route>
          <Route path="/add-service">
            <AddSevices></AddSevices>
          </Route>
          <Route path="/make-admin">
            <AddAdmin></AddAdmin>
          </Route>
          <Route path="/manage-services">
            <ManageService></ManageService>
          </Route>
          <PrivateRoute path="/user-dashboard">
            <UserDashboard></UserDashboard>
          </PrivateRoute>
          <Route path="/book">
            <Book></Book>
          </Route>
          <Route path="/booking-list">
            <BookingList></BookingList>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
