import React from 'react';

const Footer = () => {
    return (
        <footer className="center pv1 black-70 bt b--black-10 h-mid flex" >
            <div className="outline w-25 pa1 mr2" title={'Books'}>
                <h1 className={'f4'}>Books links</h1>
                <ul className="list f6 pl0 mt3 mb0">
                    <li className="pv1">
                        <a href="#" className="link blue lh-title">
                            <span className="fw7 underline-hover">Reviews</span>
                            <span className="db black-60">on books already read</span>
                        </a>
                    </li>
                    <li className="pv1">
                        <a href="#" className="link blue lh-title">
                            <span className="fw7 underline-hover">In process</span>
                            <span className="db black-60">reading right now</span>
                        </a>
                    </li>
                    <li className="pv1">
                        <a href="#" className="link blue lh-title">
                            <span className="fw7 underline-hover">Plan to read</span>
                            <span className="db black-60">based on mentions&rec</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="outline w-25 pa1 mr2"title={'Projects'}>
                <h1 className={'f4'}>Projects links</h1>
                <ul className="list f6 pl0 mt3 mb0">
                    <li className="pv1">
                        <a href="#" className="link blue lh-title">
                            <span className="fw7 underline-hover">Finished</span>
                            <span className="db black-60">portfolio of finished projects</span>
                        </a>
                    </li>
                    <li className="pv1">
                        <a href="#" className="link blue lh-title">
                            <span className="fw7 underline-hover">Working</span>
                            <span className="db black-60">Side projects in progress</span>
                        </a>
                    </li>
                    <li className="pv1">
                        <a href="#" className="link blue lh-title">
                            <span className="fw7 underline-hover">Plan to do</span>
                            <span className="db black-60">plans to create smth new</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="outline w-25 pa1 mr2"title={'Arcticles'}>
                <h1 className={'f4'}>Articles links</h1>
                <ul className="list f6 pl0 mt3 mb0">
                    <li className="pv1">
                        <a href="#" className="link blue lh-title">
                            <span className="fw7 underline-hover">On tech</span>
                            <span className="db black-60">about different tech insights</span>
                        </a>
                    </li>
                    <li className="pv1">
                        <a href="#" className="link blue lh-title">
                            <span className="fw7 underline-hover">On process</span>
                            <span className="db black-60">about workflow and PM</span>
                        </a>
                    </li>
                    <li className="pv1">
                        <a href="#" className="link blue lh-title">
                            <span className="fw7 underline-hover">On humans</span>
                            <span className="db black-60">never-ending (self)discovery</span>
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;