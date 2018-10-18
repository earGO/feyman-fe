import React, { Component } from 'react';

import Reactotron from 'reactotron-react-js'
import ReactTags from 'react-tag-autocomplete';


/*Components import*/
import Header from './Components/Header/Header';
import Itemlist from './Components/Itemlist/Itemlist';
import Footer from './Components/Footer/Footer';
import Intro from "./Components/Intro/Intro";
import Tagbox from './Components/Tagbox/Tagbox';
import Post from './Components/Post/Post';

import './App.css';

const database = {
    tags: [
        {
            tag_id: "1",
            tag_name: "reactTag",
            tag_img: "https://via.placeholder.com/50x50"
        },
        {
            tag_id: "2",
            tag_name: "NodeJS_Tag",
            tag_img: "https://via.placeholder.com/50x50"
        },
        {
            tag_id: "3",
            tag_name: "Postgres_Tag",
            tag_img: "https://via.placeholder.com/50x50"
        },
        {
            tag_id: "4",
            tag_name: "Git_Tag",
            tag_img: "https://via.placeholder.com/50x50"
        },
        {
            tag_id: "5",
            tag_name: "Heroku_Tag",
            tag_img: "https://via.placeholder.com/50x50"
        }
    ],
    posts: [
        {
            "post_id": 1,
            "post_title": "first database post",
            "post-short": "some short text",
            "articles": [1,2,],
            "tagplate": [1,2,3],
        },
        {
            "post_id": 2,
            "post_title": "first database post",
            "post-short": "some other short text",
            "articles": [3,4],
            "tagplate": [1,2,3],
        }
    ],
    articles: [
        {
            "art_id": 1,
            "title": "nesciunt quas odio",
            "image": "https://via.placeholder.com/800x600",
            "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
            "url": 'placeholder url to some cool stuff',
        },
        {
            "art_id": 2,
            "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
            "image": "https://via.placeholder.com/800x600",
            "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
            "url": 'placeholder url to some other cool stuff',
        },
        {
            "art_id": 3,
            "title": "eum et est occaecati",
            "image": "https://via.placeholder.com/800x600",
            "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
            "url": 'placeholder url to some even more stuff',
        },
        {
            "art_id": 4,
            "title": "dolorem dolore est ipsam",
            "image": "https://via.placeholder.com/800x600",
            "body": "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae",
            "url": 'placeholder url to some incredibly AWESOME stuff',
        }

    ]};




class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [],
            textField: '1',
            route: 'home',
            tags: [
                { id: 1, name: "Apples" },
                { id: 2, name: "Pears" }
            ],
            suggestions: [
                { id: 3, name: "Bananas" },
                { id: 4, name: "Mangos" },
                { id: 5, name: "Lemons" },
                { id: 6, name: "Apricots" }
            ]
        }
    }


    componentDidMount(){
        document.title = "Blog for logging cool things"
    }

    onTextChange = (event) => {
        this.setState({textField: event.target.value})
    }

    onRouteChange = (route) => {
        if (route==='signout') {//if user clicks 'Sign out' on Navigation component we change 'isSignedIn' state so "Sign in" and "registration" displayed on a Navigation component
            this.setState({isSignedIn:false})
        } else if (route==='home'){//if user is signed in we change 'isSignedIn' state so "Sign out" displayed on a Navigation component
            this.setState({isSignedIn: true})
        }
        this.setState({'route': route});
    }


/*managing tags system from a react-tag-autocomplete*/
    handleDelete (i) {
        const tags = this.state.tags.slice(0)
        tags.splice(i, 1)
        this.setState({ tags })
    }
    handleAddition (tag) {
        const tags = [].concat(this.state.tags, tag)
        this.setState({ tags })
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
        <div  className="App ph5 width-75 pv3 ph5" id={'wrapper'}>
            <Header onRouteChange={this.onRouteChange}/>

            <Intro/>
            <Tagbox textChange={this.onTextChange}/>
            <ReactTags
                tags={this.state.tags}
                suggestions={this.state.suggestions}
                handleDelete={this.handleDelete.bind(this)}
                handleAddition={this.handleAddition.bind(this)} />
            {this.state.route === 'home'
                ? <Itemlist posts={database.posts} onRouteChange={this.onRouteChange}/>
                : <Post />}
            <Footer />

        </div>
    );
  }
}

export default App;
