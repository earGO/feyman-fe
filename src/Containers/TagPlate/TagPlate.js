
import React, {Component} from 'react'
import TagComponent from '../../Components/TagComponent/TagComponent';

const urljoin = require('url-join');


/*as i want to pick tags directly from a component that fetches them,
i use tagtable placeholder instead of a database table for dev purposes*/


class TagPlate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: [],
            tagsa:[]
        };
    }
    componentDidMount() {
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