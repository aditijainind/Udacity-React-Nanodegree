import React from 'react'
import Book from './Book.js'
import PropTypes from 'prop-types'

class SearchResult extends React.Component {
  static propTypes = {
    searchResults: PropTypes.array,
    addedBooks: PropTypes.array
  }

  static defaultProps={
    searchResults:[],
    addedBooks:[]
  }

  GetShelf(bookId){
    var reqBook = this.props.addedBooks.find(function(element) {
      return element.id === bookId;
    });
    if(reqBook !== undefined)
      return reqBook.shelf
    else 
      return 'noneSelected'
  }

  render(){
    const { searchResults, onShelfChanged } = this.props
    return(
            <ol className="books-grid">
            {
              searchResults.map((result)=>(<li key={result.id}><Book book={result} shelf={this.GetShelf(result.id)} onShelfChanged={onShelfChanged}/></li>))
            }
            </ol>
          )
  }
}

export default SearchResult;