import React from 'react'
import BookShelf from './BookShelf' 
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import './App.css'

class BooksList extends React.Component{

  static propTypes = {
        books: PropTypes.array.isRequired,
        onShelfChanged: PropTypes.func.isRequired
  }
  
  static defaultProps = {
    books:[]
  }

  GetShelfItems(shelfName){
    const { books } = this.props
    return books.filter((b)=>(b.shelf===shelfName))
  }

  render(){
    return (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <BookShelf title='Currently Reading' shelfItems={this.GetShelfItems('currentlyReading')} onShelfChanged={this.props.onShelfChanged}/>  
            <BookShelf title='Want to Read' shelfItems={this.GetShelfItems('wantToRead')} onShelfChanged={this.props.onShelfChanged}/>  
            <BookShelf title='Read' shelfItems={this.GetShelfItems('read')} onShelfChanged={this.props.onShelfChanged}/>  
  
          </div>
          <div className="open-search" >
            <Link className="open-search" to="/search">
            </Link>
          </div>
        </div>)
  }
  
}

export default BooksList;
