import React from 'react';

const Header = () => {
    return (
        <nav className="dt w-100 border-box pa3 ph5-ns">
            <p className="dtc v-mid mid-gray link w-25" href="#" title="Home">
                Your friendly neighborhood Web Developer
            </p>
            <div className="dtc v-mid w-75 tr">
                <a className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" href="#" title="About">About</a>
                <a className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" href="#" title="Store">Blog</a>
                <a className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" href="#" title="Projects">Projects</a>
                <a className="link dim dark-gray f6 f5-ns dib" href="#" title="Contact">Contact</a>
            </div>
        </nav>
    );
}

export default Header;