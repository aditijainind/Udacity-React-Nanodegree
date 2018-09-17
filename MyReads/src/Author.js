import React from 'react'
import PropTypes from 'prop-types'

class Author extends React.Component{
   static propTypes = {
    authors: PropTypes.array
  }
  static defaultProps={
    authors:[]
  }
  render(){
    const authors = this.props.authors
    return(
      <div>
      {
        authors.map((author)=>(<div className="book-authors" key={author}>{author}</div>))
      }
      </div>
    )
  }
}

export default Author;