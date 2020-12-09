import React from "react"
import './style.css'
import BookList from '../BookList/BookList'

const Search = (props) => {
  return (
    <>
    <div className="bannerContainer">
      <h4>Book Search</h4>
      <h5>Book</h5>
      <form>
      <input type="text" name="search" placeholder="Enter a Book Name">
      </input>
      <button type="submit" name="searchSubmit">  Search</button>
      </form>
    </div>
    <BookList props={props.handleSearchChange}/>
    </>
  )
}

export default Search;