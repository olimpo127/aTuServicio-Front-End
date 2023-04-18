import React, {useState} from 'react'

const Search = ({ setFeeds }) => {
    const [search, setSearch] = useState('')
    const url = `http://localhost:5000/feed/${search}`;
  

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch(url)
        const data = await res.json()
        setFeeds(data)
    }
    

 
  return (
      <form className='d-flex justify-content-center gap-4 my-5' method='post' onSubmit={handleSubmit}
          id='search' name='search'>
          <input
              onChange={(e) => setSearch(e.target.value)}
              className='input-search' type="text" placeholder='Buscar' value={search}
              />
          <button className='btn btn-primary fs-5 btn-search'
              type='submit'
              
          >Buscar</button>
      </form>
  )
}

export default Search