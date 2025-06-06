import React from 'react';
import {useDispatch} from 'react-redux';
import auth from '../../appwrite/auth';
import {authlogout} from '../../features/authSlice';
import { useNavigate } from 'react-router-dom';


function LogoutBtn(){
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const logoutHandler = ()=>{
        auth.logout().then(()=>{
            dispatch(authlogout())
            
        })
        navigate('/');
    }
    return (
        <button className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full' onClick={logoutHandler}
        >Logout</button>
    );
}

export default LogoutBtn;