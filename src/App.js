import React, { Component } from 'react';

import Reactotron from 'reactotron-react-js'

/*decorations import*/
import Particles from 'react-particles-js';

/*Components import*/
import Header from './Components/Header/Header';
import Itemlist from './Components/Itemlist/Itemlist';
import Navigation from './Components/Navigation/Navigation';
import Footer from './Components/Footer/Footer';


import './App.css';


class App extends Component {
    componentDidMount(){
        document.title = "Blog for logging cool things"
    }

  render() {
      Reactotron.log('hello rendering world')
    return (
        <div  className="App">

            <Header />
            <Navigation />
            <Itemlist />
            <Footer />
        </div>
    );
  }
}

export default App;
