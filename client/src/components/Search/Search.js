import React, {useState} from "react"
import './style.css'
import BookList from '../BookList/BookList'
import axios from 'axios'


const Search = () => {
  const [search, setSearch] = useState('');

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value)
    console.log(value)
  }
  const handleSearchButton = (e) => {
    e.preventDefault();
    console.log(e.target.name)
    console.log(axios.get("https://www.googleapis.com/books/v1/volumes/zyTCAlFPjgYC")
  .then((res) => {console.log(res)}))
    console.log("Clicked")
  }

  // console.log("https://www.googleapis.com/books/v1/volumes/zyTCAlFPjgYC?key=yourAPIKey")
  return (
    <>
    <div className="bannerContainer">
      <h4>Book Search</h4>
      <h5>Book</h5>
      <form>
      <input type="text" name="search" onChange={handleSearchChange} placeholder="Enter a Book Name">
      </input>
      <button type="submit" name="searchSubmit" onClick={handleSearchButton}>  Search</button>
      </form>
    </div>
    <BookList />
    </>
  )
}

export default Search;