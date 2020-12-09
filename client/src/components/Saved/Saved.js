import React from "react"
import BookListItem from '../BookListItem/BookListItem'

const Saved = () => {
  return (
    <>
     <div style={{border: "2px solid black", width: "98%", margin: "40px auto 0 auto"}}>
     <h4>Saved</h4>
     <BookListItem />
   </div>
    </>
  )
}

export default Saved;