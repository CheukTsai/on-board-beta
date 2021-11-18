import React from 'react'
import SearchBar from 'components/SearchBar'
import NavBar from 'components/NavBar'
import 'styling/home.css'

function Home() {
    return (
        <React.Fragment>
            <NavBar />
            <div className="page-wrapper home">
                <div className="home-wrapper">
                    <div className="home-title mb-1">
                        onBoard
                    </div>
                    <SearchBar curUrl="home" />
                </div>
            </div>
        </React.Fragment>
    )
}

export default Home
