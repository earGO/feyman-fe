
import React from 'react';
import TagPlate from'../TagPlate/TagPlate';
import './Item.css';

const Item = ({userId,id,title,body}) => {
    return (
        <div className=''>
             <article className="cf ph3 ph5-ns pv5 flex flex-wrap-reverse">
                <div className='fn pr4-ns w-100 w-30-ns' id='itemTHumb'>
                    <tags className="f6 ttu ma2 tracked gray"><TagPlate /></tags>
                </div>
                <div className="fn pr4-ns mv1 w-100 w-70-l pl3-1">
                    <h1 className="mb1 mt0-ns mt1 lh-title f4 tl">{title}</h1>

                    <p className="mb3 mt2 tj-ns">{body} </p>
                </div>
            </article>

        </div>

    );
};

export default Item;