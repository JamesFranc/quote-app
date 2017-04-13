import React, { Component } from 'react';
import logo from './logo.svg';
import QuoteButton from './QuoteButton';
import TwitterButton from './TwitterButton';
import axios from 'axios';
import DOMPurify from 'dompurify';
import './QuoteField.css';
import './App.css';

var FaTwitter = require('react-icons/lib/fa/twitter');
var FaLeftQuote = require('react-icons/lib/fa/quote-left');
var FaRightQuote = require('react-icons/lib/fa/quote-right');
var FaCheck = require('react-icons/lib/fa/check');

class App extends Component {
  constructor(props) {
    super(props);
    this.updateQuote = this.updateQuote.bind(this)
    this.state = {
      txt: "Click the Quotation Mark button below to get a new quote!",
      src: "-Jimmy"
    }
    
    this.updateQuote.bind(this);
  } 

  updateQuote(e) {

    var component = this;
    var quote ="";
    var source ="";
    e.preventDefault()
    axios.get('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&timestamp'+new Date()+'&callback=').then(function (response) {
      console.log(response);
      quote = response.data[0].content;
      quote = quote.replace("<p>","");
      quote = quote.replace("</p>","");
      source = "- ".concat(response.data[0].title);
      component.setState({txt: quote, src: source});
    });
  }

  render() {
    return (
      <div className="Wrapper">
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Quote App</h2>
        </div>
        <div className="App-intro">
          
        </div>
        <div className="QuoteField" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(this.state.txt)}} ></div>
        <div className="Source" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(this.state.src)}}></div>
        <div className="Space"></div>
        <TwitterButton className="TwitterButton"link={'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22'+this.state.txt+'"'} target="_blank"><FaTwitter /></TwitterButton>
        <QuoteButton updateQuote={this.updateQuote}><FaLeftQuote className="LeftQuote"/><FaRightQuote className="RightQuote" /><FaCheck className="Check"/></QuoteButton>
      </div>
      </div>
    );
  }
}

export default App;
 