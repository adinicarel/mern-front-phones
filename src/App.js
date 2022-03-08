import { useEffect, useState, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import AddOrUpdatePhone from './pages/add/AddOrUpdatePhone';
import PhoneDetails from './pages/view/PhoneDetails'

import './App.css';


const Listings = lazy(() => import('./pages/homepage/Home'));

function App() {

  const [state, setState] = useState({ phones: [], isFetching: true });

  const abortController = new AbortController();
  const signal = abortController.signal;

  const fetchData = async () => {
    const response = await fetch('https://mern-server-phones.herokuapp.com/api/phones', {
      signal: signal
    });
    let resJson = await response.json();
    setState((state) => ({ ...state, phones: resJson, isFetching: false }));
  }

  useEffect(() => {    
    fetchData();
    return () => abortController.abort();
  },[fetchData])
  
  const handleDeleteItem = (id) => async (e) => {
    const response = await fetch(`https://mern-server-phones.herokuapp.com/api/phones/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }, body: null
    });
    const resJson = await response.json();
    console.log(resJson, e);
    if(response.ok) fetchData();
  }

  
  console.log(state.phones);
  

  return (
    <div className="App">
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        
          <Route path="/" element={<Listings items = {state.phones} handleDelete={handleDeleteItem} />}></Route>
          <Route path="/view" >
            <Route path=":id" element={<PhoneDetails />} />
          </Route>
          <Route path="/add" element={<AddOrUpdatePhone />}></Route>
          <Route path="/edit" element={<AddOrUpdatePhone />}>
            <Route path=":id" element={<AddOrUpdatePhone />} />
          </Route>
        
      </Routes>
      </Suspense>
      
      <Footer />
    </div>
  );
}

export default App;
