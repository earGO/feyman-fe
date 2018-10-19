
import React from 'react';
import Article from '../Article/Article';
import TagPlate from'../TagPlate/TagPlate';
import TagComponent from "../TagComponent/TagComponent";
import Item from "../Item/Item";

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
        "articles": [1,2,],
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

const Post = ({showPostId}) => {
    return (
        <div className=''>
            {
                post_table.map((post, i) => {
                    if (post.post_id===showPostId) {
                        post.articles.map((article_number, j) => {
                            console.log(article_number)
                            return (
                                <Article
                                    key={i}
                                    article_id={article_number}

                                />
                            );
                        })
                    }
                })
            }
        </div>

    );
};

export default Post;