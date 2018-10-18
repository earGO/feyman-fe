import React from 'react';

const TagBox = ({ textField, textChange }) => {
    return (
        <div className='pa1'>
            <input
                className='pa1 ba b--green bg-lightest-grey'
                type='search'
                placeholder='1 (or put another tag here'
                onChange={textChange}
            />
        </div>
    );
}

export default TagBox;
