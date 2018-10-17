
import React from 'react';

const Item = ({userId,id,title,body}) => {
    return (
        <article className="cf ph3 ph5-ns pv5">
            <header className="fn fl-ns w-50-ns pr4-ns">
                <h1 className="mb3 mt0 lh-title">{title}</h1>
                <time className="f6 ttu tracked gray">{userId}</time>
            </header>
            <div className="fn fl-ns w-50-ns">
                <p className="lh-copy measure mt4 mt0-ns">{body} </p>
            </div>
        </article>

    );
};

export default Item;