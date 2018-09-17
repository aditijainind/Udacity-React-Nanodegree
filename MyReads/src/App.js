import React from 'react'
import * as BooksAPI from './BooksAPI'
import BooksList from './BooksList'
import Search from './Search'
import { Route } from 'react-router-dom';
import './App.css'

class BooksApp extends React.Component {
  state = {
    books:[]
  }

  componentDidMount(){
    BooksAPI.getAll()
    .then((books)=>{
      this.setState(
        ()=>({
          books
        }))
    })
  }

  constructor(props) {
    super(props);
    this.shelfChanged = this.shelfChanged.bind(this);
  } 

  shelfChanged(book, newShelfValue){
    BooksAPI.update(book,newShelfValue)
    .then(()=>{
      BooksAPI.getAll()
      .then((books)=>{
        this.setState(
          ()=>({
            books
          }))
      })
    })
  }

  render() {
    const { books } = this.state
    return (
      <div className="app">
        <Route exact path='/' render={()=>(<BooksList books={ books } onShelfChanged={this.shelfChanged}/>)}/>
        <Route exact path='/search' render={()=>(<Search addedBooks={ books } onShelfChanged={this.shelfChanged}/>)}/>
      </div>
    )
  }
}

export default BooksApp
