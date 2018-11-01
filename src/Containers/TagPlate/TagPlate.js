
import React, {Component} from 'react'
import TagComponent from '../../Components/TagComponent/TagComponent';



/*COmponent gets it's Tags array as props from Item component
*
* It also gets tagClicked method from PostItemList to deal with tag-search (unused as of 01-11-2018)*/


class TagPlate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tagsa:[] /*i've kept this state for future use*/
        };
    }


    render() {
        const tags_t_s=this.props.tags;
        return (
            <div>
                {
                    tags_t_s.map((tagplateitem, i) => {

                            return (
                                <TagComponent
                                    key={i}
                                    tagBody={tagplateitem}
                                    tagClicked={this.props.tagClicked}
                                />
                            );
                        })
                }
            </div>
        );
    }
}

export default TagPlate;