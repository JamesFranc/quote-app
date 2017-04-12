import React from 'react';
import axios from 'axios';
import './Button.css';

class LoggingButton extends React.Component {
  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.
//   handleClick = () => {
// axios.get('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=').then(function(response){
//     console.log(response.data[0].content); // ex.: { user: 'Your User'}
//   });  
// }
//   handleClick() {
//     axios.get('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=').then(function (response) {
//       console.log(response.data[0].content);
//       this.setState({ txt: (response.data[0].content) }); // ex.: { user: 'Your User'}
//     });
//   }

update(){
    this.props.updateQuote();
}
  render() {
    return (
    <button onClick={this.props.updateQuote} > </button>
    );
  }
}

export default LoggingButton;