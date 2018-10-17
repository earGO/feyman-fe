
import React from 'react';

const TagPlate = ({tagList}) => {
    return (
        <div className=''>
            <article className="ph1-ns di">
                <a className="f6 link ph1 pv1 mb1 dib black" href="#0">TagName</a>
                <a className="f6 link ph1 pv1 mb1 dib black" href="#0">TagName</a>
                <a className="f6 link ph1 pv1 mb1 dib black" href="#0">TagName</a>
                <a className="f6 link ph1 pv1 mb1 dib black" href="#0">TagName</a>
                <a className="f6 link ph1 pv1 mb1 dib black" href="#0">TagName</a>
                {/*}                <div className='fn fl w-third pr4-ns' id='itemTHumb' >
                    <a href="https://placeholder.com"><img src="https://via.placeholder.com/350x250" /></a>
                </div>
                <div className="fn fl w-two-thirds pr4-ns mv1">
                    <h1 className="mb1 mt0-ns mt2 lh-title f4">{title}</h1>
                    <tags className="f6 ttu ma3 tracked gray">{userId}</tags>
                    <p className="mb3 mt4 tj-ns mt0-ns">{body} </p>
                </div>*/}
            </article>
        </div>

    );
};

export default TagPlate;