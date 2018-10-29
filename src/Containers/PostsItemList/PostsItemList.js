import React, {Component} from 'react';
import TagSelector from '../../Components/TagSelector/TagSelector';
import Intro from "../../Components/Intro/Intro";
import Itemlist from '../Itemlist/Itemlist';


/*the container component for demonstating posts itemlist and filtering it according to tags,
* selected in tag-selector component*/



class PostsItemList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTags:[],
            itemClickedTagName:'',
            inputSelectedTags:[]
        }
        this.updateSelectedTags = this.updateSelectedTags.bind(this)
        this.tagClicked = this.tagClicked.bind(this)
    }

    componentDidMount() {

    }

    componentDidUpdate() {
        console.log(this.state.itemClickedTagName)
    }

    updateSelectedTags = async (tags) => {
        await this.setState({
            inputSelectedTags:tags
        })
    }

    tagClicked = async(name) =>{
        await console.log('clicked on',name)

    }

    render() {
        const {
            postIds,/*defines list of IDs of posts from database to show*/
            onRouteChange, /*comes from App parent to define the parent 'route' state*/
            showPost /*defines the post ID to show when 'route' changed to 'post*/
        } = this.props;
        const {
            activeTags, /*an array for agregating all tags selected by user to filter posts*/
            itemClickedTag, /*an array to pick up tags, selected through clicking on item's tagplate*/
            inputSelectedTags /*an array to pick up tags, selected through input field*/
        } = this.state;



        return (
            <div>
                <Intro/>
                <TagSelector updateSelectedTags={this.updateSelectedTags}/>
                <Itemlist
                    postIds={postIds}
                    onRouteChange={onRouteChange}
                    showPost={showPost}
                    tagClicked={this.tagClicked}
                    />
            </div>
        )
    }
}

export default PostsItemList;