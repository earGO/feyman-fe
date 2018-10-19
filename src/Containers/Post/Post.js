
import React, {Component} from 'react';
import Article from '../../Components/Article/Article';
import TagPlate from '../TagPlate/TagPlate';


/*component displayed when user clicked on a item in ItemList
* it takes articles from articles table according to list of articles,
* post ID, title, list of articles and list of tags from posts table,
* tags themselves from tags table;
*
* it then feeds all this to <Article> and <TagPlate> components respectively*/

const post_table = [
    {
        "post_id": 1,
        "post_title": "first database post",
        "post_short": "some short text",
        "articles": [1,2],
        "tagplate": [7,5,3]
    },
    {
        "post_id": 2,
        "post_title": "second database post",
        "post_short": "some other short text",
        "articles": [3,4],
        "tagplate": [1,3,4,2]


    }
];


const article_table = [
    {
        "art_id": 1,
        "title": "nesciunt quas odio",
        "image": "https://via.placeholder.com/800x600",
        "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
        "url": 'https://twittercommunity.com/t/what-is-a-url-or-placeholder/17306',
    },
    {
        "art_id": 2,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "image": "https://via.placeholder.com/800x600",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
        "url": 'https://www.wunderlist.com/#/lists/165051122',
    },
    {
        "art_id": 3,
        "title": "eum et est occaecati",
        "image": "https://via.placeholder.com/800x600",
        "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
        "url": 'https://mail.google.com/mail/u/0/#inbox',
    },
    {
        "art_id": 4,
        "title": "dolorem dolore est ipsam",
        "image": "https://via.placeholder.com/800x600",
        "body": "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae",
        "url": 'https://www.w3schools.com/js/js_let.asp',
    }

];

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: post_table,
            articles: article_table,
            articles_to_show: [],
            post_id_to_show: '',
        };
    }

    componentDidMount() {
        let tmpart=[];
        /*here we will connect to actual database later and update our state*/
        this.setState({post_id_to_show: this.props.showPostId});
        this.state.posts.map((post,i) =>{
                    if(post.post_id === this.props.showPostId) {
                        post.articles.map((art_id, j) => {
                            this.state.articles.map((article, j) => {
                                if (art_id === article.art_id) {
                                    tmpart.push(article)
                                }

                            })
                        })
                    }
                    });
        this.setState({articles_to_show:tmpart});
            }

    render() {
        const {posts,articles,post_id_to_show,articles_to_show} = this.state;
        return(
            <div>
                {
                    articles_to_show.map((post,i) => {
                                        return(
                                                <Article
                                                key={i}
                                                article_title={post.title}
                                                article_image={post.image}
                                                article_body={post.body}
                                                article_url={post.url}
                                            />

                                        );
                                    })
                        }
            </div>
        )
    };
}
export default Post;