import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';



const DescriptionFeeds = () => {
    const [feeds, setFeeds] = useState([])
    const { id } = useParams();
    const URL = `https://jsonplaceholder.typicode.com/posts${id}`
    const getFeed = () => {
        fetch(URL)
            .then(res => res.json())
            .then(data => setFeeds(data))
            .catch(err => console.error(err));
        }
        
        useEffect(() => {
            getFeed();
            
        }, [])
        let info = {...feeds}
        console.log(feeds)
        return(
            <div className='feeds'>
                
                    <DescriptionFeed key={feeds.id} {...info}/>
                
            </div>
        )
    }




const DescriptionFeed = (props) =>{
    console.log(props)
    return(
        
            <div className="card mb-3" >
                <div className="row g-0">
                    <div className="col-md-4">
                    <img src='https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen.jpg' className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p class="card-text">{props.body}</p>
                        <p class="card-text">{props.body}</p>
                    
                    </div>
                    </div>
                </div>
            </div>
    
    )
}

export default DescriptionFeeds;