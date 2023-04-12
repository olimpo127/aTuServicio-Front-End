import React, { useEffect, useState } from 'react';
import { Link} from "react-router-dom";
import Search from '../components/SearchFeed';

const Feeds = () => {
    const [feeds, setFeeds] = useState([])
    const [search, setSearch] = useState('')
    
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
        console.log(feeds)
        console.log(search)
        /*
          const searcher = (e) => {
      e.preventDefault();
      setSearch(e.target.value)   
  }

*/
    console.log(search)
   const results = search === ''  ? feeds : feeds.filter((feed) => feed.title.toLowerCase().includes(search.toLocaleLowerCase())) 
   console.log(results)
     
        return(
            <div className='container'>
                
                <div className='row mt-5'>
                    <div className='col-3 mt-5'>
                        <SearchByRegion setSearchRegion={setSearchRegion} setSearchArea={setSearchArea} searchRegion={searchRegion}/>
                    </div>
                    <div className='col-8'>                        
                        <div className='row'>
                            <div className='col-12'>
                                <Search setSearch={setSearch } />
                            </div>
                        </div>
                        <div className="row ">
                            
                            <div className="col-md-12 "> 
                            
                                {
                                    
                                    results.map(({...f}) =><Feed key={f.id} {...f}/>)
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
                        <p className="card-text">{props.service_description }</p>                           
                
                            <button className="btn btn-primary"> click</button>
                        
                        </div>
                    </div>
                    
                     <div className='col-1 mt-3'>
                    <p className="card-text fw-semibold">{props.category}</p>
                    <p className="card-text fw-semibold">{props.region}</p>
                        <p className="card-text fw-semibold">{props.comuna}</p>
                    </div    >      

                    
                    
                </div>
            </Link>
    
    )
}

