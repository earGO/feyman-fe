
import React from 'react';
import TagPlate from'../TagPlate/TagPlate';

const Article = () => {
    return (
        <div className=''>
                <div className="mw5 f4 bg-near-white br3 br--top black-60 mv0 pa3 mr2"><TagPlate /></div>
                <div className="omw15 pa0.3">
                    <h1>Article Content</h1>
                    <img src={'https://via.placeholder.com/800x600'} width={'800px'} height={'100%'}/>
                    <p className="f4 f4-ns lh-copy measure-wide" >
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                        tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                        vero eos et accusam et justo duo dolores et ea rebum.
                    </p>
                </div>
        </div>

    );
};

export default Article;