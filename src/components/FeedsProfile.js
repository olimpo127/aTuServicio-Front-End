import React, { useEffect, useState, } from 'react';
import { Link } from "react-router-dom";
import Search from '../components/SearchFeed';
import { useContext } from "react";
import { Context } from "../store/context"
import ImageService from './ImageService';


const FeedsProfile = () => {
    const { store, actions } = useContext(Context);
    const [feeds, setFeeds] = useState([])
    const [search, setSearch] = useState('')
    const userIdFeed = store.myAccount.id



    const url = `http://localhost:5000/feed`
    const getFeeds = () => {
        fetch(url)
            .then(res => res.json())
            .then(data => setFeeds(data))
            .catch(err => console.error(err));
    }


    useEffect(() => {
        getFeeds();
    }, [url])

    const results = feeds.filter((feed) => feed.user_id && feed.user_id == userIdFeed)
    console.log(results)

    return (
        <div className='container'>

            <div className='row mt-5'>
                <div className='col-3 mt-5'>
                </div>
                <div className='col-9'>
                    <div className='row'>
                        
                    </div>
                    <div className="row ">

                        <div className="col-md-12 ">

                            {

                                results.map(({ ...f }) => <Feed key={f.id} {...f} />)
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeedsProfile;



export const Feed = (props) => {
   
    const {store} = useContext(Context);
    const autToken = !!store.token
    const user = autToken;


    const urlImage = "http://localhost:5000/services/image/" + props.id

    return (

        <div className="card mb-3 text-link rounded-4 shadow-lg p-1 mb-5 bg-body rounded" >
            <div className="row g-0">
                <div className="col-md-3 mt-5">
                    <img src={urlImage} className="img-fluid rounded-start" alt=""/>
                    <div className=" m-3">
                    <Link to={"/editdetailfeed/" + props.id} className=" btn btn-primary"> Editar imagen</Link>
                    </div>
                    
                </div>
                
                <div className="col-md-7">
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.service_description}</p>
                        {
                            user ? (

                                <Link to={"/DetailFeed/" + props.id} className="btn btn-primary"> Mas Info... </Link>
                            )
                                : (<Link to={"/signup"} className="btn btn-secondary"> Para mas info... ingresa con tu cuenta </Link>)
                        }


                    </div>
                </div>

                <div className='col-2 mt-3'>
                    <p className="card-text fw-semibold">{props.category}</p>
                    <p className="card-text fw-semibold">{props.adres}</p>
                    <p className="card-text fw-semibold">{props.comuna}</p>
                </div >



            </div>
        </div>

    )
}