import React from 'react';
import Dropzone from 'react-dropzone';
import './menu.scss';

class Menu extends React.Component{
 state={
    price:null,
    name:null,      
    file:''
 }
 uploadImage= (files)=>{
     this.setState({file:files[0]})
 };
 handleChange= event=>{
     event.target.type==='text' && this.setState({name:event.target.value});
     event.target.type==='number' && this.setState({price:event.target.value});
  }

    render(){
    return(
        <div className='Menu'>
           <div className='item input'>
                <div className='container input'>
                <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
                    {({getRootProps, getInputProps}) => (
                        <section>
                            <p className='dropzone'>Drag 'n' drop some files here, or click to select files</p> 
                        </section>
                    )}
                </Dropzone>
                    <input placeholder='Name ' type='text' onChange={this.handleChange.bind(this)}></input>
                    <input placeholder='Price' type='number' onChange={this.handleChange.bind(this)}></input>
                    <div className='button add'>ADD</div>
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