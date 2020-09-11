import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Msg from './Msg';
import Input from './Input';
import firebase from "firebase";
import axios from "axios";
import Form from  "./Form";

const user={
  user:"",
  email:"",
  password:""
}





class App extends React.Component {
 constructor(){
   super();
   this.state={
    messages:[
      
      

    ]

   }

  this.db=firebase.firestore()
 }
 componentDidMount(){
        
    // Simple POST request with a JSON body using axios
    
  


  this.db.collection("chat").orderBy("date","asc").onSnapshot((doc)=>{
   const messages= doc.docs.map((data)=>{
          const   dbdata=   data.data();
          dbdata.id=data.id
      return dbdata
    }).sort();

     // const products=doc.docs;
     

    this.setState({
      messages
   })
   
  })
    
  
 }

 handleEmailChange=(event)=>{
  event.preventDefault();
  user.email=event.target.value;

}

 handlePasswordChange=(event)=>{
  event.preventDefault();
  user.password=event.target.value;
  

}


 login=(event)=>{

  event.preventDefault();
  
  console.log(event)
  
const article = { email:user.email,password:user.password };
    axios.post('http://localhost:8000/login', article).then((resp)=> {user.user=resp.data.name
    
      
      if(!user.user){
          alert("Wrong username/passcode")
      }
     else{
      this.componentDidMount();
      }  }); 

  
}

  send=(a)=>{
      const val=document.getElementById("message").value;
      console.log(val)
      if(val&&user.user)
      this.db.collection("chat").add({
        
        user:user.user,
        text:val,
        date:Date.now()
        
      

  })

      

      
      
        document.getElementById("message").value="";
    
       
     
  }

  render(){
  return (
    <div className="App">
      <header>Chat App</header>
        {user.user && <div>
         <Msg  messages={this.state.messages} user={user.user}/>
        
         <Input send={this.send}/>
         <div  id="blank">

            sds

         </div>
         <div  id="blank">

            

         </div><div  id="blank">

            

</div>
         </div>}

         {!user.user && <div>
           <Form handleEmailChange={this.handleEmailChange} handlePasswordChange={this.handlePasswordChange}  login={this.login}/>

          
           
           </div>}
         
        
         
    </div>

  );
}
}
export default App;
