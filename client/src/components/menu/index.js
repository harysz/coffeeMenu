import React from 'react';
import questionmark from './questionMark.png'
import './menu.scss';
class Menu extends React.Component{
 state={
    price:null, 
    name:null,
    fileView:questionmark,     
    uploaded:false,
    file:null
 }
 uploadImage=(file)=>{
     const reader= new FileReader();
     reader.readAsDataURL(file.target.files[0])
     reader.onloadend = file =>{
         this.setState({fileView:reader.result,uploaded:true,file:file.target.result,})
         console.table(this.state.file)
     }
 };
 handleChange= event=>{
     event.target.type==='text' &&  this.setState({name:event.target.value});
     event.target.type==='number' && this.setState({price:event.target.value});
  }
  handleClick=()=>{
      this.setState({
          price:null,
          name:null,
          fileView:questionmark,
          uploaded:false,
          file:null
        })
  }
    render(){
    return(
        <div className='Menu'>
           <div className='item input'>
                <div className='container input'>
                    <img src={this.state.uploaded? this.state.fileView :questionmark } alt=''></img> 
                    <input type='file' onChange={this.uploadImage}/>
                    <input placeholder='Name ' value={this.state.name? this.state.name:''} required type='text' onChange={this.handleChange.bind(this)}></input>
                    <input placeholder='Price' required type='number' value={this.state.price? this.state.price:''} onChange={this.handleChange.bind(this)}></input>
                    <div className='buttonAdd' onClick={()=>{this.props.addOne(this.state);this.handleClick()}}
                     >ADD</div>
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