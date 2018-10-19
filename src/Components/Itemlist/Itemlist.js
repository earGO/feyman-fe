import React from 'react';
import Item from '../Item/Item.js'

/*itemlist gives to each <item> component
* post_id,title and tagplate from posts table
* tag_text and tag_img from tags table, according*/
const Itemlist = ({ posts , tags, onRouteChange, showPost}) => {
    return (
        <div className=''>
            {
                posts.map((post, i) => {
                    return (
                        <Item
                            key={i}
                            post_id={post.post_id}
                            title={post.post_title}
                            short={post.post_short}
                            tagplate={post.tagplate}
                            onRouteChange={onRouteChange}
                            tags={tags}
                            showPost={showPost}

                        />
                    );
                })
            }
        </div>
    );

}

export default Itemlist;