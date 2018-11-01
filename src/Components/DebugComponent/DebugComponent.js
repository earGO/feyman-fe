
import React from 'react';

/*this component creates a single tag for a parent <TagPlate> component
* it is populated by data from tags table in database
* it is this component, who connects to the database and fetches data needed
* it gets tag_id from a <TagPlate> component and gets
* tag_name and tag_img from a tags table in database*/

const DebugComponent = () => {
    return (
        <div name="tagselectorwrapper" className={'dib'}>
            <h4>Component not mounted, need debug</h4>
        </div>

    );
};

export default DebugComponent;