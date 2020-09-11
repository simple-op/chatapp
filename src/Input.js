import React from "react"

function Input(props){
   return (
       <div> 
          <input id="message" placeholder="Type Your Message.....">
          </input>
         <a href="#blank"> <img  onClick={props.send.bind(this)} src="https://www.flaticon.com/svg/static/icons/svg/724/724954.svg"></img> </a>
       </div>

   ) 

} 

export default Input;