import React from 'react';
import BookListItem from '../BookListItem/BookListItem'

const BookList = () => {
 return (
   <div style={{border: "2px solid black", width: "98%", margin: "40px auto 0 auto"}}>
     <h4>Results</h4>
     <BookListItem />
   </div>
  
 ) 
}

export default BookList