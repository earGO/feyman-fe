
import React from 'react';

/*this component gets article_id from a parent <Post> component,
* and then gets all fields from an articles table*/


const Article = ({article_title,article_image,article_body,article_url}) =>{
    return (
        <div name='articlewrapper' className={'center w-100'}>
            <article className="pa2 pa4-ns">
                <h1 className="f3-ns f4-m  w-60-ns w-80-m helvetica center tc">{article_title}</h1>
                <img src={article_image} className=" w-60-ns w-80-m f4 ba" alt='' height={'auto'}/>
                <text className="f4-ns f5-m center helvetica lh-copy tj ba w-60-ns w-80-m">
                        {article_body}
                        </text>
                    <p>
                        <a href={article_url} className={'f4 --dark-blue b'}>some url text ffspos</a>
                    </p>
            </article>
        </div>

    );
};

export default Article;