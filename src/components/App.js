import React from 'react'
import '../style.css'
import Header from './Header'
import SearchBar from './SearchBar'
import Question from './Question'

export default function App() {
    return (
        <div className='app--container'>
            <Header />
            <SearchBar />
            <Question />
        </div>
    )
}