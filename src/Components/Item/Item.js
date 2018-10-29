
import React from 'react';
import TagPlate from '../../Containers/TagPlate/TagPlate';
import './Item.css';

/*this component creates item for itemlist
* it takes short post intro from posts table
* post name from posts table
* list of tags from tags table*/

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            itemTags:[]
        }
        this.itemSelectedTags = this.itemSelectedTags.bind(this)
    }

    componentDidUpdate(){
    }


    itemSelectedTags = async (tags) => {
        await this.setState({
            itemTags:tags
        })
    }

    render(){
        const {title,short, post_id, tags, onRouteChange, showPost} = this.props;
        return (
            <div className=''>
                <article className="center mw6 mw8-ns hidden mv4 flex flex-wrap-reverse pv0.4">
                    <div className="mw5 f4 bg-near-white br3 br--top black-60 mv0 pa3 mr2">
                        <TagPlate
                            tags={tags}
                            itemSelectedTags={this.itemSelectedTags}
                            tagClicked={this.props.tagClicked}/>
                    </div>
                    <div className="omw15 pa0.3">
                        <h1 className="f5 f6-ns lh-copy measure-wide">{title}</h1>
                        <p className="pointer f4 f4-ns lh-copy measure-wide"
                           onClick={() => {
                               onRouteChange('post');
                               showPost(post_id);
                           } }
                        >
                            {short}
                        </p>
                    </div>
                </article>
            </div>

        );
    }

};


export default  Item;