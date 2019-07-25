import React from 'react';
import "./style.scss";
import Menu from './components/menu';
import axios from 'axios';
class App extends React.Component{
  
 constructor(props){
   super(props); 
   this.state={
    name:null,
    price:null,
    fileTypes:['image/jpeg','image/png','image/gif']
  }
  axios.get('/api/').then(res=>{

    const Coffee =res.data.coffee;
    this.setState({Coffee})
 })
}

   removeOne=(x)=>{
    console.log(x);
    const list =this.state.Coffee;
    const Coffee=list.filter(function(items){
      return items !==x
    })
    this.setState({Coffee});
   }
  
  render(){

    return (
      <div className="App">

        <Menu
         menu={this.state.Coffee}
         removeOne={this.removeOne}

        />
      
      </div>
    );
  }
}

export default App;
