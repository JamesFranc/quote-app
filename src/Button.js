import React, { Component } from 'react';
import './Button.css';

class Button extends Component{
    
    render(){
        return(
            <a className="Button" href={this.props.link} target={this.props.target}>
            <div class={this.props.class} onClick={this.props.updateQuote}>
                { this.props.message }
                { this.props.children }
            </div>
            </a>
        );
    }
}


export default Button;