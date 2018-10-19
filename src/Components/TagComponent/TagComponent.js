
import React from 'react';
import Item from "../Item/Item";

/*this component creates a single tag for a parent <TagPlate> component
* it is populated by data from tags table in database
* it is this component, who connects to the database and fetches data needed
* it gets tag_id from a <TagPlate> component and gets
* tag_name and tag_img from a tags table in database*/




const TagComponent = ({tag_name,tag_img}) => {
    return (
        <div name="tagselectorwrapper" className={'dib'}>
            <img alt={'tagicon'} src={tag_img}/>
            <h4>{tag_name}</h4>
        </div>

    );
};

export default TagComponent;