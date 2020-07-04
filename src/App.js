import React, {Component} from 'react';
import './App.css';
import HomePage from './components/home/home';

class App extends Component{

  constructor(props){ 
    super(props);
  }

  render(){
    return (
      <HomePage title={"arjie portfolio"}/>
    ); 
  }


}


export default App;
