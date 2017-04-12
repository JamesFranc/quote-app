import React, { Component } from 'react';
import logo from './logo.svg';
import QuoteButton from './QuoteButton';
import TwitterButton from './TwitterButton';
import axios from 'axios';
import DOMPurify from 'dompurify';
import './QuoteField.css';
import './App.css';

var FaTwitter = require('react-icons/lib/fa/twitter');

class App extends Component {
  constructor(props) {
    super(props);
    this.updateQuote = this.updateQuote.bind(this)
    this.state = {
      txt: "<p>Initial Text State</p>",
      src: "-I made this"
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
      source = "- ".concat(response.data[0].title);
      component.setState({txt: quote, src: source});
    });
  }

  render() {
    return (
      <div>
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
        <TwitterButton className="TwitterButton"link="http://twitter.com" target="_blank"><FaTwitter /></TwitterButton>
        <QuoteButton updateQuote={this.updateQuote}>Update The Quote</QuoteButton>
      </div>
      </div>
    );
  }
}

export default App;
 