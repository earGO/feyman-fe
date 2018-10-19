
import React from 'react'
import TagComponent from '../../Components/TagComponent/TagComponent';

/*as i want to pick tags directly from a component that fetches them,
i use tagtable placeholder instead of a database table for dev purposes*/
const tagtable = [
    {
        tag_id: 1,
        tag_name: "reactTag",
        tag_img: "https://via.placeholder.com/50x50"
    },
    {
        tag_id: 2,
        tag_name: "NodeJS_Tag",
        tag_img: "https://via.placeholder.com/50x50"
    },
    {
        tag_id: 3,
        tag_name: "Postgres_Tag",
        tag_img: "https://via.placeholder.com/50x50"
    },
    {
        tag_id: 4,
        tag_name: "Git_Tag",
        tag_img: "https://via.placeholder.com/50x50"
    },
    {
        tag_id: 5,
        tag_name: "Heroku_Tag",
        tag_img: "https://via.placeholder.com/50x50"
    }
]

const TagPlate = ({tagplate}) => {
    return (
        <div>
            {
                tagplate.map((tagplateitem, i) => {
                    if (tagtable[i].tag_id===tagplateitem) {
                        return (
                            <TagComponent
                                key={i}
                                tag_name={tagtable[i].tag_name}
                                tag_img={tagtable[i].tag_img}
                            />
                        );
                    }

                })
            }

        </div>
    );
};

export default TagPlate;