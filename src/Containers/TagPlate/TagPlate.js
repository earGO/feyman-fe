
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
        let fetchUrl=urljoin('http://localhost:3000/ptags/',this.props.postId.toString())
        fetch(fetchUrl)
            .then(response => response.json())
            .then(data => {
                this.setState({tags: data});
            })
            .catch(err => console.log('error getting post'))
        let fetchUrl2=urljoin('http://localhost:3000/ptagsa/',this.props.postId.toString())
        fetch(fetchUrl2)
            .then(response => response.json())
            .then(dataa => {
                this.setState({tagsa: dataa});
            })
            .catch(err => console.log('error getting post'))
    }

    render() {
        const tags_t_s=this.state.tags;
        {console.log(tags_t_s[0])}
        return (
            <div>
                {
                    tags_t_s.map((tagplateitem, i) => {

                            return (
                                <TagComponent
                                    key={i}
                                    tag_name={tagplateitem.label}
                                    tag_img={tagplateitem.img}
                                />
                            );
                        })
                }
            </div>
        );
    }
}

export default TagPlate;