import React from 'react'
import 'styling/searchbar.css'



function SearchBar(props) {
    let className = null
    let btnClass = null
    if (props.curUrl === "home") {
        className = "d-flex search-bar"
        btnClass = "btn btn-outline-secondary btn-search"
    }
    if (props.curUrl === "nav") {
        className = "d-flex search-bar-nav"
        btnClass = "btn btn-outline-secondary btn-search-nav"
    }

    return (
        <form className={className}>
            <input className="form-control search" type="search" placeholder="Get you on board today" aria-label="Search" />
            <button className={btnClass} type="submit">Search</button>
        </form>
    )
}

export default SearchBar
