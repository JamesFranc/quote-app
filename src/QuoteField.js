import React, { Component } from 'react';
import DOMPurify from 'dompurify';
import './QuoteField.css';

class QuoteField extends Component{
    
    render(){
        return(
            <div className="QuoteField" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(this.state.txt)}} ></div>
            
        );
    }
}


export default QuoteField;