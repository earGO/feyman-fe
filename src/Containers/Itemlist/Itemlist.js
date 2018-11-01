import React, {Component} from 'react';
import Item from '../../Components/Item/Item.js'

/*itemlist gives to each <item> component
* post_id,title and tagplate from posts table
* tag_text and tag_img from tags table, according*/
class Itemlist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
        };
    }

    componentDidMount() {
        fetch('http://localhost:3000/smart') /*fetches start page data from backend*/
            .then(response => response.json())
            .then(data => {
                this.setState({posts: data});
            })
            .catch(err => console.log('error getting post'))
    }

    componentDidUpdate(){
    }

    render (){
        const posts_t_s=this.state.posts;
        return(
            <div className=''>
                {/*the structure of a {Post} object defined by JSON response structure*/
                    posts_t_s.map((post,i) => {
                        return (
                            <Item
                                key={i}
                                post_id={post[0]}
                                title={post[1]}
                                short={post[2]}
                                tags={post[3]}
                                onRouteChange={this.props.onRouteChange} /*a props method for changing App's 'route' state*/
                                showPost={this.props.showPost} /*a prop for a <Post> that gives it ID of a post it should load*/
                                tagClicked={this.props.tagClicked} /*an unused prop for <PostsItemList to deal with click on a tags*/
                                activeTags={this.props.activeTags}/> /*an prop to define will <Item> component be rendered, based on selected tags in <TagSelector> component*/

                        );}
                    )
                }
            </div>
            )

    }


}


export default Itemlist;