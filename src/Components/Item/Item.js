
import React from 'react';
import TagPlate from'../TagPlate/TagPlate';
import './Item.css';

const Item = ({userId,id,title,body}) => {
    return (
        <div className=''>
            <article className="center mw6 mw8-ns hidden mv4 flex flex-wrap-reverse pv0.4">
                <div className="mw5 f4 bg-near-white br3 br--top black-60 mv0 pa3 mr2"><TagPlate /></div>
                <div className="omw15 pa0.3">
                    <p className="f4 f4-ns lh-copy measure-wide">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                        tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                        vero eos et accusam et justo duo dolores et ea rebum.
                    </p>
                </div>
            </article>
        </div>

    );
};

export default Item;