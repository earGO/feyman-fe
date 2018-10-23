import React, { Component } from 'react';

import Reactotron from 'reactotron-react-js'



/*Components import*/
import Header from '../Components/Header/Header';
import Itemlist from './Itemlist/Itemlist';
import Footer from '../Components/Footer/Footer';
import Intro from "../Components/Intro/Intro";
import Post from './Post/Post';
import DebugComponent from '../Components/DebugComponent/DebugComponent';

import './App.css';
/*pure logic of a database is
* container maps through list of items,
* does all queries to database,
* and feeds results to the components */

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            textField: '',
            route: 'home',
            showPostId: '', /*a state to pick a post to show*/
            posts:[],
            tags:[]
        }
    }


    componentDidMount(){
        document.title = "Blog for logging cool things";
       fetch('http://localhost:3000/')
            .then(response => response.json())
           .then(data => {
               this.setState({posts: data});
           })
           .catch(err => console.log('error getting post'))
    }

    onTextChange = (event) => {
        this.setState({textField: event.target.value})
    }

    showPost = (postId) => {
        if (postId) {
            this.setState({showPostId: postId});
            console.log(this.state)
        };

    }

    onRouteChange = (route) => {
        if (route==='signout') {//if user clicks 'Sign out' on Navigation component we change 'isSignedIn' state so "Sign in" and "registration" displayed on a Navigation component
            this.setState({isSignedIn:false})
        } else if (route==='home'){//if user is signed in we change 'isSignedIn' state so "Sign out" displayed on a Navigation component
            this.setState({isSignedIn: true})
        }
        this.setState({'route': route});
    }




  render() {
      Reactotron.log('hello rendering world')

     const {showPostId,textField} = this.state;

    return (
        <div  className="App ph5 width-75 pv3 ph5" id={'wrapper'}>
            <Header onRouteChange={this.onRouteChange}/>


            {/*            <Tagbox textChange={this.onTextChange}/>*/}
            {this.state.route === 'home'
                ?<div>
                    <Intro/>
                    <Itemlist
                        postIds={this.state.posts}
                        onRouteChange={this.onRouteChange}
                        showPost={this.showPost}
                    />
                </div>
                : (
                    this.state.route==='post'
                        ? <div>{console.log(this.state)}
                        <Post showPostId={showPostId} /></div>
                        : <DebugComponent/>
                )
            }
            <Footer />

        </div>
    );
  }
}

export default App;
