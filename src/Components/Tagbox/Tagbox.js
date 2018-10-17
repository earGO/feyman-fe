import React from 'react';

const TagBox = ({ textField, textChange }) => {
    return (
        <div className='pa2'>
            <input
                className='pa3 ba b--green bg-lightest-blue'
                type='search'
                placeholder='1 (or put another tag here'
                onChange={textChange}
            />
        </div>
    );
}

export default TagBox;
