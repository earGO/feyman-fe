
import React from 'react';
import TagPlate from'../TagPlate/TagPlate';
import './Item.css';

const Item = ({postId,tagArray, onRouteChange}) => {
    return (
        <div className=''>
            <article className="center mw6 mw8-ns hidden mv4 flex flex-wrap-reverse pv0.4">
                <div className="mw5 f4 bg-near-white br3 br--top black-60 mv0 pa3 mr2"><TagPlate /></div>
                <div className="omw15 pa0.3">
                    <h1 className="f5 f6-ns lh-copy measure-wide">some post name</h1>
                    <p className="pointer f4 f4-ns lh-copy measure-wide"
                        onClick={() => onRouteChange('post')}>
                        some post short announce text some post short announce textsome post short announce text
                        some post short announce textsome post short announce textsome post short announce text
                        vvvsome post short announce textsome post short announce textsome post short announce text
                        some post short announce textsome post short announce textsome post short announce text
                    </p>
                </div>
            </article>
        </div>

    );
};

export default Item;