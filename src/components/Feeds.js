import React, { useEffect, useState } from 'react';
import Feed from './Feed';
const Feeds = () => {
    const [feeds, setFeeds] = useState([])

    const URL = 'https://jsonplaceholder.typicode.com/posts'
    const getFeed = () => {
        fetch(URL)
            .then(res => res.json())
            .then(data => setFeeds(data))
            .catch(err => console.error(err));
        }
        
        useEffect(() => {
            getFeed();
            
        }, [])
    
     
        return(
            <div className='feeds'>
                {
                    feeds &&
                    feeds.map(({...f}) =><Feed key={f.id} {...f}/>)
                }
            </div>
        )
    }

export default Feeds;