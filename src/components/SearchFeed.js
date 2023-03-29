import React, {useState, useEffect} from 'react'
import Feed from './Feed'

const SearchFeed = () => {
  
  const [ users, setUsers ] = useState([])
  const [ search, setSearch ] = useState("")

  
  const URL = 'https://jsonplaceholder.typicode.com/posts'

 
  const showData = () => {
    fetch(URL)
    .then((res) => res.json())
    .then((data) => setUsers(data))
    .catch((error) => console.log(error))
  }  

  const searcher = (e) => {
      e.preventDefault();
      setSearch(e.target.value)   
  }


   
   const results = !search ? users : users.filter((dato) => dato.title.toLowerCase().includes(search.toLocaleLowerCase())) 
  
   useEffect( ()=> {
    showData()
  }, [])
 
  return (
    <>
        <div>
            <input value={search} onChange={searcher} type="text" placeholder='Search' className='form-control'/>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                    Default checkbox
                </label>
            </div>
            <select className="form-select" aria-label="Default select example">
                <option selected>Región</option>
                <option value="1">Arica</option>
                <option value="2">Iquique</option>
                <option value="3">Antofagasta</option>
            </select>
            
        </div>
        <div>
        { results.map( (...user) => <Feed key={user.title} {...user.body} />
                     
                        
                        
                                     
                )}
        </div>
        
    </>
    )
}
export default SearchFeed;


/*
<table className='table table-striped table-hover mt-5 shadow-lg'>
            <thead>
                <tr className='bg-curso text-white'>
                    <th>Resultados</th>
                    
                </tr>
            </thead>
            <tbody>
                { results.map( (user) => (
                    <tr key={user.title}>
                        <td>{user.body}</td>
                        
                    </tr>                    
                ))}
            </tbody>
        </table>*/