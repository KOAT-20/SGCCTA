import React, { Component } from 'react';
// Components
import Main from './components/Main.js'
import Footer from './components/footer.js';

class App extends Component {
  render() {
    return (
      <div>
      	<Main />
      	<br/><br/><br/><br/><br/>
      	<Footer />
      </div>
    );
  }
}

export default App;
