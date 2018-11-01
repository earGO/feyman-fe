
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
            itemTags:[],
            neededTags:[]
        }
        this.itemSelectedTags = this.itemSelectedTags.bind(this)
    }

    componentDidMount() {

    }

    componentDidUpdate(){
    }

    /*the method fills this item state from TagPlate child component$ unused as of 01-11-2018
    * it was better by picking directly from props, but i left it this way to deal with tag-clickin in future*/
    itemSelectedTags = async (tags) => {
        await this.setState({
            itemTags:tags
        })
    }
    /*this method decides, should each particular item be shown on <ItemList> component
    *based on tags, selected in <TagSelector> component*/
    shouldShow = () => {
        let res=[];
        let has=[];
        let needs=[];
        /*props for a selected in <TagSelector> tags*/
        this.props.activeTags.map(tag => {
            needs.push(tag.label)
        })
        /*this <Item>'s tags taken from props*/
        this.props.tags.map(tag => {
            has.push(tag.label)
        })
        /*by filling local arrays we dealing with async issues
        * though function itself is NOT async, i've managed to fix async issues this way
        * React didn't want to map on props directly*/
        needs.map(tag => {
            res.push(has.includes(tag))
        })
        return !res.includes(false)

    }


    render(){
        const {title,short, post_id, tags, onRouteChange, showPost} = this.props;
        return (

            <div className=''>
                {
                    this.shouldShow()
                    ? <article className="b--dark-red center mw4 mw8-ns hidden mv4-ns mv2-m flex flex-wrap-reverse pv0.4">
                            <div className="b--orange mw6 f4 bg-near-white br3 br--top black-60 mv0 w-20-ns measure-wide w-100-m">
                                <TagPlate
                                    tags={tags}
                                    itemSelectedTags={this.itemSelectedTags}
                                    tagClicked={this.props.tagClicked}/>
                            </div>
                            <div className="b--black-20 pa0.3 w-75-ns w-100-m ">
                                <h1 className="center b--black-30 f3-ns f4-m lh-copy bt-m bw1 w-75 tc">{title}</h1>
                                <p className="b--blue center pointer f5-m f4-ns lh-copy w-100 measure-wide tj"
                                   onClick={() => {
                                       onRouteChange('post');
                                       showPost(post_id);
                                   } }
                                >
                                    {short}
                                </p>
                            </div>
                        </article>
                        : null
                }

            </div>

        );
    }

};


export default  Item;