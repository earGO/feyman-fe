
import React from 'react';
import TagPlate from '../../Containers/TagPlate/TagPlate';
import './Item.css';

/*this component creates item for itemlist
* it takes short post intro from posts table
* post name from posts table
* list of tags from tags table*/




const Item = ({title,short, post_id, tagplate, onRouteChange, showPost}) => {
    console.log(post_id)
    return (
        <div className=''>
            <article className="center mw6 mw8-ns hidden mv4 flex flex-wrap-reverse pv0.4">
                <div className="mw5 f4 bg-near-white br3 br--top black-60 mv0 pa3 mr2">
                    <TagPlate  tagplate={tagplate}/></div>
                <div className="omw15 pa0.3">
                    <h1 className="f5 f6-ns lh-copy measure-wide">{title}</h1>
                    <p className="pointer f4 f4-ns lh-copy measure-wide"
                        onClick={() => {
                            onRouteChange('post');
                            showPost(post_id);
                            console.log(post_id)
                        } }
                        >
                        {short}
                    </p>
                </div>
            </article>
        </div>

    );
};

export default Item;