import React from 'react'

const Search = ({ setSearch }) => {

  return (
      <form className='d-flex justify-content-center gap-4 my-5' method='post' onSubmit={(e) => e.preventDefault()}
          id='search' name='search'>
          <input
              onChange={(e) => {
                  e.preventDefault()
                  setSearch(e.target.value)
              }}
              className='input-search' type="text" placeholder='Buscar'
              />
          <button className='btn btn-primary fs-5 btn-search' type='submit'>Buscar</button>
      </form>
  )
}

export default Search