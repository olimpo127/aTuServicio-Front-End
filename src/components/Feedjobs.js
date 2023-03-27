import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";


const Feed = () =>  {

    const [ads, setAds] = useState([]);

    const getAds = () => {
        fetch('https://hp-api.onrender.com/api/characters')
            .then(res => res.json())
            .then(data => setAds(data))
            .catch(err => console.error(err));
    }

    useEffect(() => {
        getAds();
        
    }, [])
    
    return (
        <div>
            <div className="row row-cols-1 row-cols-lg-4 align-items-stretch g-4 py-5">
                {ads ?
                    ads.map((ad) => (
                        <div key={ad.id} className='col-md-12' >
                            <Card img={ad.image}
                                name={ad.name}
                                text={ad.text}
                                texts={ad.texts}
                                text2={ad.text2}
                            />
                        </div>
                    )):"Hubo un error o no hay anuncios"}
                
            </div>
        </div>
    )
}





const FeedJobs = (props) => {
    return (
            <div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4">
                    <img src={props.img} class="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{props.title}</h5>
                        <p class="card-text">{props.text}</p>
                        <p class="card-text">{props.text}</p>
                        <p class="card-text">{props.text}</p>
                        <p class="card-text">{props.text}</p>
                    </div>
                    </div>
                </div>
            </div>
    )
}


export default Feed;