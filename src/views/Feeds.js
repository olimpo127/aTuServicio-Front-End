import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import SearchByRegion from '../components/SearchByRegion';
import Search from '../components/SearchFeed';
const Feeds = () => {
    const [feeds, setFeeds] = useState([])
    const [search, setSearch] = useState('')
    const [searchRegion, setSearchRegion] = useState('')
    const [searchArea, setSearchArea] = useState('')

    const URL = `https://jsonplaceholder.typicode.com/posts/${search}${searchRegion}${searchArea}`
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
            <div className='container'>
                
                <div className='row mt-5'>
                    <div className='col-3 mt-5'>
                        <SearchByRegion setSearchRegion={setSearchRegion} setSearchArea={setSearchArea} searchRegion={searchRegion}/>
                    </div>
                    <div className='col-8'>                        
                        <div className='row'>
                            <div className='col-12'>
                                <Search  setSearch={setSearch}/>
                            </div>
                        </div>
                        <div className="row ">
                            
                            <div className="col-md-12 "> 
                            
                                {
                                    feeds &&
                                    feeds.map(({...f}) =><Feed key={f.id} {...f}/>)
                                }
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

export default Feeds;



export const Feed = (props) =>{
   
    return(
        
            <Link to={"/"+props.id} className="card mb-3 text-link rounded-4 shadow-lg p-1 mb-5 bg-body rounded" >
                <div className="row g-0">
                    <div className="col-md-3">
                        <img src="https://previews.123rf.com/images/john79/john791803/john79180300118/97790125-reparaci%C3%B3n-y-mantenimiento-del-hogar-con-dise%C3%B1o-de-herramientas-ilustraci%C3%B3n-vectorial.jpg" className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-7">
                        <div className="card-body">
                            <h5 className="card-title">{props.title}</h5>
                            <p className="card-text">{props.body}</p>                           
                
                            <button className="btn btn-primary"> click</button>
                        
                        </div>
                    </div>
                    
                     <div className='col-1 mt-3'>
                        <p className="card-text fw-semibold">Categoria</p>
                        <p className="card-text fw-semibold">Comuna{props.height}</p>
                        <p className="card-text fw-semibold">User{props.height}</p>
                    </div    >      

                    
                    
                </div>
            </Link>
    
    )
}

