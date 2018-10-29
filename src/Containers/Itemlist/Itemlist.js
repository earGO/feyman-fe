import React, {Component} from 'react';
import Item from '../../Components/Item/Item.js'

const urljoin = require('url-join');

/*a function to compare two arrays and return 'true' if hasTags has all items from needTags,
* otherwise it's a 'false'*/
const shouldShow = (hasTags,needTags) => {
    let res=[];
    needTags.map(tag => {
        res.push(hasTags.includes(tag))
    })
    return !res.includes(false)
}



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
    render (){
        const posts_t_s=this.state.posts;
        return(
            <div className=''>
                {
                    posts_t_s.map((post,i) => {
                        return (
                            <Item
                                key={i}
                                post_id={post[0]}
                                title={post[1]}
                                short={post[2]}
                                tags={post[3]}
                                onRouteChange={this.props.onRouteChange}
                                showPost={this.props.showPost}
                                tagClicked={this.props.tagClicked}

                            />
                        );}
                    )
                }
            </div>
            )

    }


}


export default Itemlist;