import React from 'react'
import Author from './Author'
import PropTypes from 'prop-types';
import BookShelfSelector from './BookShelfSelector'
class Book extends React.Component{
  
  static propTypes = {
    book:PropTypes.object,
    onShelfChanged: PropTypes.func.isRequired
  }
  
  render(){
    const { book, shelf, onShelfChanged } = this.props
    return(<div className="book">
             <div className="book-top">
             {book.imageLinks !== undefined?
               <div className="book-cover" style={{ width: 128, height: 192,                                                
                               backgroundImage:`url(${book.imageLinks['thumbnail']})` }}></div>:
               <div/>
             }
             <BookShelfSelector book={book} shelf={shelf} onShelfChanged={onShelfChanged}/>
             </div>
             <div className="book-title">{book.title}</div>
             <Author authors={book.authors}/>
           </div>
          )
    }
}

export default Book;