import React from 'react'
import PropTypes from 'prop-types';

class BookShelfSelector extends React.Component{
  
  static propTypes = {
    onShelfChanged: PropTypes.func.isRequired
  }
  
  getCheckmarkText(value){
    return value===this.props.shelf?String.fromCharCode(10003):String.fromCharCode(32)
  }
  
  getDefaultValue(){
    return this.props.shelf
  }

  render(){
    const { book, onShelfChanged } = this.props
    const optionKeyValues = [
      {
        value:'currentlyReading',
        displayName:'Currently Reading'
      },
      {
        value:'wantToRead',
        displayName:'Want to Read'
      },
      {
        value:'read',
        displayName:'Read'
      },    
      {
        value:'noneSelected',
        displayName:'None'
      }
    ]
       
    return(<div className="book-shelf-changer">
             <select onChange={(event)=>onShelfChanged(book, event.target.value)} defaultValue={this.getDefaultValue()}>
               <option value="none" disabled>Move to...</option>
               {
                 optionKeyValues.map((option)=>(<option value={option.value} key={option.value} >
                   {this.getCheckmarkText(option.value)}{option.displayName}
                 </option>))
               }
             </select>
           </div>)
  }
}

export default BookShelfSelector