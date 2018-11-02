
import React from 'react';

/*this component gets all it's parts from a .map cycle in <Post> component,
* and then gets all fields from an articles table
* */


const Article = ({article_title,article_image,article_body,article_url,articleUrlTitle}) =>{
    return (
        <div name='articlewrapper' className={'center w-100'}>
            <article className="pa2 pa4-ns">
                <h1 className="f3-ns f4-m  w-60-ns w-80-m helvetica center tc">{article_title}</h1>
                <img src={article_image} className=" w-60-ns w-80-m f4 ba" alt='' height={'auto'}/>
                <p className="f4-ns f5-m center helvetica lh-copy tj ba w-75-l w-80-m">
                        {article_body}
                        </p>
                    <p>
                        <a href={article_url} className={'f4 --dark-blue b'}>{articleUrlTitle}</a>
                    </p>
            </article>
        </div>

    );
};

export default Article;