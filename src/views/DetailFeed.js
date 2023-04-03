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
                                    <img src="https://previews.123rf.com/images/john79/john791803/john79180300118/97790125-reparaci%C3%B3n-y-mantenimiento-del-hogar-con-dise%C3%B1o-de-herramientas-ilustraci%C3%B3n-vectorial.jpg" class="d-block w-100" alt="..."/>
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
                            <h5 className="card-title  mb-2">Title {title}</h5>
                            <p className="card-text">Tervice_description {body}</p>
                            <p className="card-text">Detalle {body}</p>

                        </div>

                    </div>
                </div>
                
                <div className="row">


                       
                </div>
                
            </div>
            
        )
    }





export default DetailFeed;