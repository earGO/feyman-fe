
import React from 'react';
import Article from '../../Components/Article/Article';


/*component displayed when user clicked on a item in ItemList
* it takes articles from articles table according to list of articles,
* post ID, title, list of articles and list of tags from posts table,
* tags themselves from tags table;
*
* it then feeds all this to <Article> and <TagPlate> components respectively*/

const urljoin = require('url-join');


class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
        };
    }
    /*fetch post data hee, based in a post-id prop from clickin' on an Item component in an Itemlist*/
    componentDidMount() {
        let fetchUrl=urljoin('http://localhost:3000/post/',this.props.showPostId.toString())
        fetch(fetchUrl)
            .then(response => response.json())
            .then(data => {
                this.setState({articles: data});
                console.log(this.state.articles)
            })
            .catch(err => console.log('error getting post'))
    }

        /*so the <Post> itself is a set of articles, each one is described by <Article> component,
        * and has Body, title, img and url link to some interesting stuff
        * the <Post> component just iterates over data, fetched from database, based in ID, recieved as props from App
        * parent component*/
    render() {
        const post_articles = this.state.articles;
        return(
            <div>
                {
                    post_articles.map((article,i) => {
                        /*the structure and NAMING of article component props,given to the component,
                        defined by database structure and
                        JSON-response structure*/
                        return(

                            <Article
                                key={i}
                                article_title={article.a_title}
                                article_image={article.article_image}
                                article_body={article.body}
                                article_url={article.article_url}
                            />

                        );
                    })
                }


            </div>
        )
    };
}
export default Post;