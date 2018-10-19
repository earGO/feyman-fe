
import React from 'react';
import TagPlate from'../TagPlate/TagPlate';

/*this component gets article_id from a parent <Post> component,
* and then gets all fields from an articles table*/

const article_table = [
    {
        "art_id": 1,
        "title": "nesciunt quas odio",
        "image": "https://via.placeholder.com/800x600",
        "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
        "url": 'https://twittercommunity.com/t/what-is-a-url-or-placeholder/17306',
    },
    {
        "art_id": 2,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "image": "https://via.placeholder.com/800x600",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
        "url": 'https://www.wunderlist.com/#/lists/165051122',
    },
    {
        "art_id": 3,
        "title": "eum et est occaecati",
        "image": "https://via.placeholder.com/800x600",
        "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
        "url": 'https://mail.google.com/mail/u/0/#inbox',
    },
    {
        "art_id": 4,
        "title": "dolorem dolore est ipsam",
        "image": "https://via.placeholder.com/800x600",
        "body": "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae",
        "url": 'https://www.w3schools.com/js/js_let.asp',
    }

];

const Article = (article_id) => {
    return (
        <div name='articlewrapper' className=''>
            {
                article_table.map((item,i) => {
                    if (item.art_id === article_id) {
                        return (
                            <div className={''}>
                                <h1>{item.title}</h1>
                                <img src={item.image} alt={'tagicon'} width={'450px'} height={'100%'}/>
                                <p> {item.body}</p>
                                <a href={item.url}>some url text ffspos</a>

                            </div>
                        )
                    }
                })
            }
        </div>

    );
};

export default Article;