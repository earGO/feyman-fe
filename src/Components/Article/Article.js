
import React from 'react';

/*this component gets article_id from a parent <Post> component,
* and then gets all fields from an articles table*/


const Article = ({article_title,article_image,article_body,article_url}) =>{
    return (
        <div name='articlewrapper'>
            <p>component mounted</p>
             <h1>{article_title}</h1>
             <img src={article_image} alt={'tagicon'} width={'450px'} height={'100%'}/>
              <p> {article_body}</p>
              <a href={article_url}>some url text ffspos</a>

        </div>

    );
};

export default Article;