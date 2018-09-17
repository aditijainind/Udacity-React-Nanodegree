import React from 'react'
import { Link } from 'react-router-dom'
import SearchResult from './SearchResult.js'
import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types';

class Search extends React.Component {
  static defaultProps = {
    addedBooks:[]
  }
  static propTypes = {
    addedBooks:PropTypes.array
  } 

  state = {
      query: '',
      searchResults:[],
  }
    
  updateQuery = (query) => {
    this.setState(() => ({
      query: query.trim()
    }))
    this.setState(() => ({
        searchResults: []
    }))
    if(query==='')
      this.setState(() => ({
        searchResults: []
      }))
    else
      BooksAPI.search(query,20)
      .then((searchResults)=>{
        this.setState(
          ()=>({
            searchResults
          }))
      })
  }

  render(){
    const { query, searchResults } = this.state
    const { addedBooks, onShelfChanged }  = this.props
    return(<div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to="/">Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text" 
                       placeholder="Search by title or author"
                       value={query}
                       onChange={(event) => this.updateQuery(event.target.value)}
                />
              </div>
            </div>
            <div className="search-books-results">
              <SearchResult searchResults={searchResults} addedBooks={addedBooks} onShelfChanged={onShelfChanged}/>
            </div>
          </div>)
  }
}

export default Search;