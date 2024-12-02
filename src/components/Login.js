import Header from "./Header";
import { useState } from "react";
const Login=()=>{
     const[isSignFrom,setisSignFrom]=useState(true);
    const toggleSignInform=()=>{
        setisSignFrom(!isSignFrom);
    }
    return(
        <div>
        <Header/>
        <div className="absolute">
        <img 
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dae1f45f-c2c5-4a62-8d58-6e1b0c6b2d8e/6d1fb8a4-5844-42a4-9b01-1c6c128acf19/IN-en-20240827-TRIFECTA-perspective_WEB_c292a608-cdc6-4686-8dc8-405bfcf753af_small.jpg"
          alt="background"/> 
        </div>
        <form className="p-12 absolute bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
             <h1 className="front-bold text-3xl py-4">{isSignFrom ?"Sign IN":"Sign Up" }</h1>
             
           {!isSignFrom &&<input 
            type="text" 
            placeholder="Full Name" 
            className="p-2 my-2 w-full bg-gray-700"/> }

            <input 
            type="text" 
            placeholder="Email Address" 
            className="p-2 my-2 w-full bg-gray-700 "/>

            <input 
            type="password" 
            placeholder="Password" 
            className="p-2 my-2 w-full bg-gray-700"/>

            <button 
            className="bg-red-700 p-4 my-4 w-full ">
            Sign In
            </button>
            <p className="py-4 cursor-pointer" onClick={toggleSignInform}>{isSignFrom ?"New to Netflix? Sign Up":"Already register ? Sign In"}</p>
        </form>
        </div>
    )
}
export default Login;