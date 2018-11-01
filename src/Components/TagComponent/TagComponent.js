
import React from 'react';

/*this component creates a single tag for a parent <TagPlate> component
* it is populated by data from tags table in database
* it recieves data from it's parent component <TagPlate>
*     which get's it through <Item> and <ItemList> components from
*     <PostsItemList< component, that fetches data from database*/

class TagComponent extends React.Component {

    onTagClick = (e) => {
        this.props.tagClicked(this.props.tagBody)
    }

    render(){
        /*the structure and syntax of props defined by JSON response structure to <PostItemList> component*/
        const tag_name = this.props.tagBody.label;
        const tag_img = this.props.tagBody.img;
        return (
                <div name="tagselectorwrapper"
                     className={'dib'}
                    onClick={this.onTagClick}>
                    <div className="f6 ph1 pv1 mb2 dib black w-100"><img alt={tag_name} src={tag_img} width={'10px'} height={'100%'}/>{tag_name}</div>
                </div>
    );
    }

};

export default TagComponent;