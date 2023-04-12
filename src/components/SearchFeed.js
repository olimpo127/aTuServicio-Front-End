import React from 'react'

const Search = ({ setSearch }) => {

  return (
      <form className='d-flex justify-content-center gap-4 my-5' method='get' onsubmit={(e) => e.preventDefault() } >
          <input
              onChange={(e) => {
                  e.preventDefault()
                  setSearch(e.target.value)
              }}
              className='input-search' type="text" placeholder='Buscar' />
          <button className='btn btn-primary fs-5 btn-search'>Buscar</button>
      </form>
  )
}

export default Search