import React from "react";

function Msg(props){
   return ( 
     <div id="messages">

         {props.messages.map((message)=>{
             if(props.user===message.user)
           return(  
                     <div  className="message messageOwner">  
                 <span className="user userOwner"> {message.user}</span>
                 <div className=" text textOwner">

                   {message.text} 
           </div>
            
            </div> 
           
             
        //      (props.user===message.user)&&
        //      <div  className="message">  
        //          <span className="user"> {message.user}</span>
        //          <div className="text">

        //            {message.text} 
        //    </div>
            
        //     </div> 
            
           
             )
             else{
                return(
                    <div  className="message">  
                             <span className="user"> {message.user}</span>
                             <div className="text">
            
                               {message.text} 
                       </div>
                        
                         </div> 


                )
            }
           
         })}
         </div>

        

   )



}

export default Msg;