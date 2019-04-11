import React, {Component} from 'react';

import './box.css';

class Box extends React.Component{
    
    constructor(props){
        
        super(props)
    }
    
        render(){
            
            return (
                
                <div style={{backgroundColor:this.props.background}} className="box">  </div>
                
                
                
                )
            
            
            
            
            
        }    
    
    
    
    
    
}

export default Box;