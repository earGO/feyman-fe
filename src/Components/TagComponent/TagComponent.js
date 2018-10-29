
import React from 'react';

/*this component creates a single tag for a parent <TagPlate> component
* it is populated by data from tags table in database
* it is this component, who connects to the database and fetches data needed
* it gets tag_id from a <TagPlate> component and gets
* tag_name and tag_img from a tags table in database*/

class TagComponent extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(){

    }

    onTagClick = (e) => {
        this.props.tagClicked(this.props.tagBody)
    }
    render(){
        const tag_name = this.props.tagBody.label;
        const tag_img = this.props.tagBody.img;
        return (
                <div name="tagselectorwrapper"
                     className={'dib'}
                    onClick={this.onTagClick}>
                    <a className="f6 link dim ph1 pv1 mb2 dib black" href="#0"><img alt={tag_name} src={tag_img} width={'10px'} height={'100%'}/>{tag_name}</a>
                </div>
    );
    }

};

export default TagComponent;