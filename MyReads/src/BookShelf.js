import React from 'react'
import Book from './Book.js'
import PropTypes from 'prop-types';

class BookShelf extends React.Component{
  
  static propTypes = {
        shelfItems: PropTypes.array.isRequired,
        onShelfChanged: PropTypes.func.isRequired
  }
  
  static defaultProps = {
    shelfItems:[]
  }
  
  render(){
    const { title, shelfItems, onShelfChanged } = this.props 
    return(<div className="bookshelf">
             <h2 className="bookshelf-title">{title}</h2>
             <div className="bookshelf-books">
               <ol className="books-grid">
               {
                 shelfItems.map((book)=>(
                   <li key={book.id}>
                     <Book book={book} shelf={book.shelf} onShelfChanged={onShelfChanged}/>
                   </li>
                   )) 
               }
               </ol>
             </div>
           </div>)
  }
}

export default BookShelf;