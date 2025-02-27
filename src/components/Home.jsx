
import { useState, useContext, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

// import Register from './register';
// import Deposit from './deposit';
// import Cashback from './cashback';
// import Alldata from './alldata';
// import Loading from './loding';
// import Login from './login';
import Navbar from './navbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/nav.css';

import { navdataContext } from './login';

function Home() {

  return (
    <>
    <h1>hi</h1>
    </>
  );
}

export default Home;
