import React from 'react';
import Item from '../Item/Item.js'

const Itemlist = ({ posts }) => {
    return (
        <div className={'flex flex-wrap'}>
            {
                posts.map((post, i) => {

                    return (
                        <Item
                            key={i}
                            userId={posts[i].userId}
                            title={posts[i].title}
                            body={posts[i].body}
                        />
                    );
                })
            }
        </div>
    );

}

export default Itemlist;