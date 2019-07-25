import React from 'react';
import "./style.scss";
import Menu from './components/menu';
import axios from 'axios';
class App extends React.Component{
  
 constructor(props){
   super(props); 
   this.state={
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
   addOne=(x)=>{
      const list = {...this.state.Coffee};
      x.price&& x.name && x.uploaded &&  console.warn(x);
   }
  
  render(){

    return (
      <div className="App">

        <Menu
         menu={this.state.Coffee}
         removeOne={this.removeOne}
         addOne={this.addOne}
        />
      
      </div>
    );
  }
}

export default App;
