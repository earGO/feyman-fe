import React from 'react';

const TagBox = ({ textField, textChange }) => {
    return (
        <div className='pa2'>
            <input
                className='pa3 ba b--green bg-lightest-blue'
                type='search'
                placeholder='input tags'
                onChange={textChange}
            />
        </div>
    );
}

export default TagBox;
