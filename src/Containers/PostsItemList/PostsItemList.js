import React, {Component} from 'react';
import TagSelector from '../../Components/TagSelector/TagSelector';
import Intro from "../../Components/Intro/Intro";
import Itemlist from '../Itemlist/Itemlist';


/*the container component for demonstating posts itemlist and filtering it according to tags,
* selected in tag-selector component*/



class PostsItemList extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        console.log('mounting successfull')
    }

    render() {
        const {
            postIds,/*defines list of IDs of posts from database to show*/
            onRouteChange, /*comes from App parent to define the parent 'route' state*/
            showPost /*defines the post ID to show when 'route' changed to 'post*/
        } = this.props;

        return (
            <div>
                <Intro/>
                <TagSelector/>
                <Itemlist
                    postIds={postIds}
                    onRouteChange={onRouteChange}
                    showPost={showPost}
                    />
            </div>
        )
    }
}

export default PostsItemList;