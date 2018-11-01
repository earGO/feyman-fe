
import React from 'react';
/*dumb hardcoded component
* will make it database fetched later on in v1.1.0*/
const Intro = (props) => {
    return (
        <section className="mw10 center ph3-ns cf ph2-ns db w-80-l w-90-m">
            <div className=" ma0 tj center f4-ns f5-m lh-copy w-100-ns w-100-m db mv0">
                <p className="b--blue f5-m f4-ns lh-copy w-100 measure-wide tj">
                    Hello and welcome to my blog and portfolio!
                </p>
                <p className="b--dark-blue">
                    Here are all my WebDev projects, pet and commercial, as well as abstracts of books and whitepapers I read, projects I work or plan to work on. I plan to rework this blog now and then as my skills grow.
                </p>
                <p className="b--dark-blue">
                    You can filter posts using tag-selector under this entry. To return to home page from anywhere in this blog just click on title at the top left.
                </p>
            </div>

        </section>
    );
};

export default Intro;