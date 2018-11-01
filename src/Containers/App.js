import React, { Component } from 'react';

import Reactotron from 'reactotron-react-js'


/*Containers import*/
import PostsItemList from '../Containers/PostsItemList/PostsItemList';

/*Components import*/
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
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
            route: 'home', /*a state for routing*/
            showPostId: '', /*a state to pick a post to show*/
            tags:[],
            serveradress: 'http://localhost:5500/', /*a state to set localhost port in one place*/
            endpoints: {
                smartPost: 'smart', /*send to frontend a JSON object with post data to process, created on backend*/
                post: 'post/:id', /*an endpoint thad sends entire post data with articles and stuff*/
                tagSelect: 'admin/tags/' /*get all tags to fill <TagSelector> when creating new post*/
            }
        }
    }

    componentDidMount(){
        /*set displayed title*/
        document.title = "WebDev Blog&Portfolio";
    }

    /*method passed to all points of App, where routing can change*/
    onRouteChange = (route) => {
            this.setState({route: route})
        }

    /*a method passed down to Item through Itemlist throug PostItemList
    * when clicked, it gets showPostId from item and passes it as prop to Post component*/
    showPost = (postId) => {
        if (postId) {
            this.setState({showPostId: postId});
            console.log(this.state)
        };

    }


  render() {
      Reactotron.log('hello rendering world')

     const {showPostId, route,serveradress,endpoints} = this.state;

    return (
        <div  className="ba b--dark-green App ph5 w-70-l w-90-m center db pv3 ph5" id={'wrapper'}>
            <Header onRouteChange={this.onRouteChange}/>
            {route === 'home'
                ?<div>
                    <PostsItemList
                        postIds={this.state.posts}
                        onRouteChange={this.onRouteChange}
                        showPost={this.showPost}
                        serverAdress={serveradress}
                        postEndPoint={endpoints.smartPost}
                        tagsEndPoint={endpoints.tagSelect}
                    />
                </div>
                : (
                    route==='post'
                        ? <div>{console.log(this.state)}
                        <Post
                            showPostId={showPostId}
                            serverAdress={serveradress}
                            postEndPoint={endpoints.post}
                        /></div>
                        : <DebugComponent/>
                )
            }
            <Footer />
        </div>
    );
  }
}

export default App;
