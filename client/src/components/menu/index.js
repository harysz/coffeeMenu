import React from 'react';
import questionmark from './questionMark.png'
import './menu.scss';
import axios from 'axios';
class Menu extends React.Component{
 state={
    price:null, 
    name:null,
    file:questionmark,     
    uploaded:false
 }
 uploadImage= (file)=>{
   
     const reader= new FileReader();
     reader.readAsDataURL(file.target.files[0])
     reader.onloadend = file =>{
         this.setState({file:reader.result,uploaded:true})
     }
 };
 handleChange= event=>{
     event.target.type==='text' &&  this.setState({name:event.target.value});
     event.target.type==='number' && this.setState({price:event.target.value});
  }
  
    render(){
    return(
        <div className='Menu'>
           <div className='item input'>
                <div className='container input'>
                    <img src={this.state.uploaded? this.state.file :questionmark } alt=''></img> 
                    <input type='file' onChange={this.uploadImage}/>
                    <input placeholder='Name ' required type='text' onChange={this.handleChange.bind(this)}></input>
                    <input placeholder='Price' required type='number' onChange={this.handleChange.bind(this)}></input>
                    <div className='buttonAdd' onClick={()=>this.props.addOne(this.state)} >ADD</div>
                </div>
            </div>
                 {this.props.menu && this.props.menu.map((item,i)=>{
            return(<div className='item' key={i}>
                        <img src={item.url} alt={item.name} />
                        <div className='container'>
                        <h3 className='title'>{item.name}</h3><h4 className='price'>{item.price}$</h4>  
                        </div>
                        <div className='button' onClick={()=>this.props.removeOne(item)} key={i}>X</div>
                    </div>
                )
            })}
         
        </div>
    )
}
}
 
export default Menu;