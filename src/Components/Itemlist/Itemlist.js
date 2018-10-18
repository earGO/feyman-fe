import React from 'react';
import Item from '../Item/Item.js'

const Itemlist = ({ posts , onRouteChange}) => {
    return (
        <div className=''>
            {
                posts.map((post, i) => {

                    return (
                        <Item
                            key={i}
                            userId={posts[i].userId}
                            title={posts[i].title}
                            body={posts[i].body}
                            onRouteChange={onRouteChange}
                        />
                    );
                })
            }
        </div>
    );

}

export default Itemlist;