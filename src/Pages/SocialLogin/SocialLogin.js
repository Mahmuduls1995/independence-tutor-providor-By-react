import React from 'react';
import {FaGithub,FaFacebook} from 'react-icons/fa';
import {FcGoogle} from 'react-icons/fc';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
// import Loading from '../../Shared/Loading/Loading';
const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorElement;

    if (loading || loading1) {
        // return <Loading></Loading>
        
    }
    if (error ||error1) {
            errorElement=<div>
            <p className="text-danger">Error: {error?.message} {error1?.message}</p>
          </div>
      }
    

      if (user||error1) {
        navigate('/home')
      }
    return (
        <div>
        <div className="flex ml-20 items-center">
            <div style={{ height: '1px' }} className="bg-primary w-40"></div>
            <p className=" ">or</p>
            <div style={{ height: '1px' }} className="bg-primary w-40"></div>
        </div>
        {errorElement}


        {/* <div className="mt-2" >
            <button 
            onClick={()=>signInWithGoogle()}
            className=" bg-info d-flex justify-content-center align-items-center w-50 d-block rounded-md  mx-auto">
             <p className=" mx-5 mt-2 fs-3 fw-bold " >Facebook Sign In</p>
            <FaFacebook className="" size="50px"/>
            </button>
        </div> */}


        <div className="mt-2" >
            <button 
            onClick={()=>signInWithGithub()}
            className=" bg-info d-flex justify-content-center align-items-center w-80 d-block rounded-md  mx-auto">
            <FaGithub className="mx-4" size="40px"/>
             <p className=" mx-3 mt-2 fs-3 font-semibold " >Github Sign In</p>
            </button>
        </div>


        <div className="mt-2 mb-4" >
            <button 
            onClick={()=>signInWithGoogle()}
            className=" bg-info d-flex justify-content-center align-items-center w-80 d-block rounded-md  mx-auto">
            <FcGoogle className="" size="40px"/>
             <p className=" mx-4 mt-2 fs-3 font-semibold " >Google Sign In</p>
            </button>
        </div>

    </div>
    );
};

export default SocialLogin;