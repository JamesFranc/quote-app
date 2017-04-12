import React from 'react';
import Button from './Button';
import './QuoteButton.css';

class QuoteButton extends Button{
    
    render(){
        return(
            <a className="QuoteButton" href={this.props.link} target={this.props.target}>
            <div onClick={this.props.updateQuote}>
                { this.props.message }
                { this.props.children }
            </div>
            </a>
        );
    }
}

export default QuoteButton;