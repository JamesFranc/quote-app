import React from 'react';
import Button from './Button';
import './TwitterButton.css';

class TwitterButton extends Button{
    
    render(){
        return(
            <a className={this.props.className} href={this.props.link} target={this.props.target}>
            <div onClick={this.props.updateQuote}>
                { this.props.message }
                { this.props.children }
            </div>
            </a>
        );
    }
}

export default TwitterButton;