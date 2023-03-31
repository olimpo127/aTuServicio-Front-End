import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DescriptionFeeds = () => {
    const [description, serDescription] = useState([])
    //let { name, location, origin, gender, image, status, species } = fetchedData;
    let {title, body} = description
    console.log(title)
    console.log(body)
    console.log(description)
    let { id } = useParams();
    console.log(id)
    const URL = `https://jsonplaceholder.typicode.com/posts/${id}`
    const getFeed = () => {
        fetch(URL)
            .then(res => res.json())
            .then(data => serDescription(data))
            .catch(err => console.error(err));
        }
        console.log(description)
        useEffect(() => {
            getFeed();
            
        }, [URL])
       
        return(
            <div className="card mb-3" >
                <div className="row g-0">
                    <div className="col-md-4">
                    <img src='https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen.jpg' className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">title{title}</h5>
                        <p className="card-text">body{body}</p>
                        <p className="card-text">detalle{body}</p>
                    
                    </div>
                    </div>
                </div>
            </div>
            
        )
    }





export default DescriptionFeeds;