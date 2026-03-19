import React,{useState} from "react";
import axios from "axios";

function Login(){

 const [email,setEmail]=useState("");
 const [password,setPassword]=useState("");

 const loginUser = async()=>{

  const res = await axios.post(
   "https://auth-system-backend-xp8h.onrender.com/api/auth/login",
   {
    email,
    password
   }
  );

  alert(JSON.stringify(res.data));

 };

 return(

  <div>

   <h2>Login</h2>

   <input
    placeholder="Email"
    onChange={(e)=>setEmail(e.target.value)}
   />

   <br/><br/>

   <input
    type="password"
    placeholder="Password"
    onChange={(e)=>setPassword(e.target.value)}
   />

   <br/><br/>

   <button onClick={loginUser}>
    Login
   </button>

  </div>

 );
}

export default Login;