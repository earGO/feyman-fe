import React, { Component } from 'react';

import Reactotron from 'reactotron-react-js'

/*Components import*/
import Header from './Components/Header/Header';
import Itemlist from './Components/Itemlist/Itemlist';
import Footer from './Components/Footer/Footer';
import Scroll from './Components/Scroll/Scroll';
import Intro from "./Components/Intro/Intro";

import './App.css';



class App extends Component {
    constructor() {
        super()
        this.state = {
            posts: []
        }
    }


    componentDidMount(){
        document.title = "Blog for logging cool things"
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(posts => {this.setState({posts:posts})})
            .then(console.log('placeholder fetched'))
    }

  render() {
      Reactotron.log('hello rendering world')

      const {posts} = this.state;
      console.log(posts[1])
      const tstId='1';
    return (
        <div  className="App">

            <Header />
            <Intro/>
            <Scroll>
            <Itemlist posts={posts}/>*/}
            </Scroll>

            <Footer />
        </div>
    );
  }
}

export default App;
