import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DetailFeed = () => {
    const [post, setPost] = useState([])
  
    let {title, body} = post
 
    let { id } = useParams();
    console.log(id)
    const URL = `https://jsonplaceholder.typicode.com/posts/${id}`
    const getFeed = () => {
        fetch(URL)
            .then(res => res.json())
            .then(data => setPost(data))
            .catch(err => console.error(err));
        }
        console.log(post)
        useEffect(() => {
            getFeed();
            
        }, [URL])
       
        return(
            <div className='container'>
                <div className='row justify-content-center my-2'>
                    <div className='col-9 '>
                        <div id="carouselExampleControls" class="carousel slide my-3" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen.jpg" class="d-block w-100" alt="..."/>
                                </div>
                                
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                        <div className='card-body'>
                            <h5 className="card-title  mb-2">title {title}</h5>
                            <p className="card-text">body {body}</p>
                            <p className="card-text">detalle {body}</p>

                        </div>

                    </div>
                </div>
                
                <div className="row">


                       
                </div>
                
            </div>
            
        )
    }





export default DetailFeed;