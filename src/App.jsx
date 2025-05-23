import './App.css'
import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import auth from '../src/appwrite/auth';
import { authlogin, authlogout } from './features/authSlice';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import {Outlet} from 'react-router-dom';
function App() {
  const[loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  
  useEffect(()=>{
    auth.getUser().then((userData)=>{
      if(userData){
        dispatch(authlogin({userData}))
      }else{
        dispatch(authlogout())
      }
    }).catch((err)=> err)
    .finally(() => setLoading(false))
  },[]);
  
  return !loading ? (
    
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
        <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
