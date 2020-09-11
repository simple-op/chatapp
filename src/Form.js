import React from "react";
const login=()=>{
    alert("dsfdsfaaaaaaaaaaa")
}
function Form(props){

 return(
     <div style={{marginTop:"40%"}}>
         
        <label>
          
          <input type="text" placeholder="Your Email" onChange={props.handleEmailChange} name="email" />
        </label>
        <br/>
        <label>

        <input  placeholder="Your Password" onChange={props.handlePasswordChange} name="password" />
        </label>
        <br/>
        <button onClick={props.login}>Submit</button>
        <button><a href="http://localhost:8000/signup">Signup</a></button>

      
       </div>  

 )
    


 

}

export default Form;