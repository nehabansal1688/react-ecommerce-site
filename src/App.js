import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import SignIn from './routes/sign-in/sign-in.component';

const Shop = () => <div> i am shop component</div>;

const App = () => {
  return (
    //if we nest routes within other routes then parent will always be visible
    //we have to specify outlet in parent component i.e. place where the child will be rendered  once the routed matches parent/child
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
