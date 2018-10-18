import React from 'react';

const Header = ({onRouteChange}) => {
    return (
        <nav className="dt w-60 center border-box pa0 ph0-ns">
            <p className="dtc v-mid mid-gray link w-50 tl" href="#" title="Home">
                Your friendly neighborhood Web Developer
            </p>
            <div className="dtc v-mid w-40 tr">
                <a className="link dim dark-gray f6 f5-ns dib mr2 mr3-ns"
                   href="#"
                   title="About"
                    onClick={() => onRouteChange('home')}>Home</a>
                <a className="link dim dark-gray f6 f5-ns dib mr2 mr3-ns" href="#" title="About">Stuff</a>
                <a className="link dim dark-gray f6 f5-ns dib" href="#" title="Contact">Contact</a>
            </div>
        </nav>
    );
}

export default Header;