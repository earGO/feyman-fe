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
            tagsClicked:[],
            tagsClickedActive:[],
            inputSelectedTags:[]
        }
        this.updateSelectedTags = this.updateSelectedTags.bind(this)
        this.tagClicked = this.tagClicked.bind(this)
    }
    /*two empty methods for debugging purposes*/
    componentDidMount() {
    }

    componentDidUpdate() {

    }
    /*method updates activeTags state, used to implement tags-filtering of an ItemList*/
    updateSelectedTags = async (tags) => {
        await this.setState({activeTags:tags})

    }
/*reserved functionality for tag filtering by clicking on post.
As of 31-10-2018 couldn't figure out how to link theese to the react-select component.
Moving on, will figure out and fix later.*/
    tagClicked = async(name) =>{
        let tagsClicked = [...this.state.tagsClicked];
        if (!tagsClicked.includes(name)) {tagsClicked.push(name);
        this.setState({ tagsClicked: tagsClicked })}
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
                <TagSelector
                    updateSelectedTags={this.updateSelectedTags}
                    clickedTag={this.state.tagsClicked}
                    serverAdress={this.props.serverAdress}
                    tagsEndPoint={this.props.tagsEndPoint}
                />
                <Itemlist
                    postIds={postIds}
                    onRouteChange={onRouteChange}
                    showPost={showPost}
                    tagClicked={this.tagClicked}
                    activeTags={this.state.activeTags}
                    serverAdress={this.props.serverAdress}
                    postEndPoint={this.props.postEndPoint}
                />
            </div>
        )
    }
}

export default PostsItemList;