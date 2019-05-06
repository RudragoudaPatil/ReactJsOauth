import React,{ Component } from 'react';

import './App.css';
import firebase from 'firebase';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

firebase.initializeApp({
  apiKey:"AIzaSyAw9NcotXEjU64GyIalgKs3llIQdK7PlYs",
  authDomain:"oauthdemo-9ab3b.firebaseapp.com"
})

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      isSignedIn:false
    }
    
  }
  uiConfig = {
    signInFlow: "popup",
    signInOptions:[
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      
    ],
    callbacks:{
      signInSuccess:()=>false
    }
  }
  componentDidMount=()=>{
   


    firebase.auth().onAuthStateChanged(user=>{
      this.setState({isSignedIn:!!user})
    })

  }
  render(){
  return (
    <div className="App">
      {this.state.isSignedIn ?(
      <div>Signed In!</div>
      ):(   
    <StyledFirebaseAuth uiConfig={this.uiConfig}
    firebaseAuth={firebase.auth()}/>
    
      )}
    </div>
  );
}
}

export default App;
