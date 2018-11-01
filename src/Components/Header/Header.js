import React from 'react';

const Header = ({onRouteChange}) => {
    return (
        <nav className="dt w-90 center border-box pa0 ph0-ns">
            <p className="dtc v-mid mid-gray link w-50 tl pointer"
               title="Home"
               onClick={() => onRouteChange('home')}>
                Your friendly neighborhood Web Developer
            </p>
            <div className="dtc v-mid w-40 tr">
                <p className="dim dark-gray f6 f5-ns dib mr2 mr3-ns pointer"
                   title="Home"
                    onClick={() => onRouteChange('home')}>Home</p>
                <p className="dim dark-gray f6 f5-ns dib mr2 mr3-ns pointer"  title="About">About</p>
                <p className="dim dark-gray f6 f5-ns dib pointer" title="Contact">Contacts</p>
            </div>
        </nav>
    );
}

export default Header;