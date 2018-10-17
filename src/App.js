import React, { Component } from 'react';

import Reactotron from 'reactotron-react-js'

/*Components import*/
import Header from './Components/Header/Header';
import Itemlist from './Components/Itemlist/Itemlist';
import Footer from './Components/Footer/Footer';
import Scroll from './Components/Scroll/Scroll';
import Intro from "./Components/Intro/Intro";
import Tagbox from './Components/Tagbox/Tagbox';

import './App.css';



class App extends Component {
    constructor() {
        super()
        this.state = {
            posts: [],
            textField: '',
        }
    }


    componentDidMount(){
        document.title = "Blog for logging cool things"
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(posts => {this.setState({posts:posts})})
            .then(console.log('placeholder fetched'))
    }

    onTextChange = (event) => {
        this.setState({textField: event.target.value})
    }

  render() {
      Reactotron.log('hello rendering world')

     const {posts,textField} = this.state;
      const filteredPosts = posts.filter(function(post) {
          return post.userId == textField;
          }

      );
      console.log(typeof posts[0])
    return (
        <div  className="App">

            <Header />
            <Intro/>
            <Tagbox textChange={this.onTextChange}/>
            <Scroll>
                 <Itemlist posts={filteredPosts}/>
            </Scroll>

            <Footer />
        </div>
    );
  }
}

export default App;
