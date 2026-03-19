import React, {useState} from "react";
import axios from "axios";

function Register(){

 const [name,setName]=useState("");
 const [email,setEmail]=useState("");
 const [password,setPassword]=useState("");

 const registerUser = async()=>{

  const res = await axios.post(
   "https://auth-system-backend-xp8h.onrender.com/api/auth/register",
   {
    name,
    email,
    password
   }
  );

  alert(JSON.stringify(res.data));
 };

 return(

  <div>

   <h2>Register</h2>

   <input
    placeholder="Name"
    onChange={(e)=>setName(e.target.value)}
   />

   <br/><br/>

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

   <button onClick={registerUser}>
    Register
   </button>

  </div>

 );
}

export default Register;