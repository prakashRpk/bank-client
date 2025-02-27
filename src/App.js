import { useState,useEffect} from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Register from './components/register';
import Deposit from './components/deposit';
import Cashback from './components/cashback';
import Alldata from './components/alldata';
import Login from './components/login';
import Nav_bar from './components/navbar';
import Loading from './components/loding';
function App() {
    const [load, setLoad] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setLoad(false);
      }, 2000);
    }, []);

  return (<>
        {load ? (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "700px" }}>
          <Loading />
        </div>
      ) : (
        <>
        <Nav_bar></Nav_bar>
        <HashRouter>
        <Routes>
          <Route path='/Home' element={<Home />} />
          <Route path='/Register' element={<Register />} />
          {/* <Route path='/Login' element={<Login />} /> */}
          <Route path='/deposit' element={<Deposit />} />
          <Route path='/cashback' element={<Cashback />} />
          <Route path='/alldata' element={<Alldata />} />
        </Routes>
    </HashRouter>


  
</>)}
  </>);
}

export default App;
