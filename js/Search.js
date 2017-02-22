import React from 'react'
import preload from '../public/data.json'

const Search = React.createClass({
  render () {
    return (
      <div className='search'>
        {preload.shows.map((show) => {
          return (
            <div className='show-card'>
              <img src={`/public/img/posters/${show.poster}`} />
            </div>
          )
        })}
      </div>
    )
  }
})

export default Search
