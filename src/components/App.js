import React from 'react'
import '../style.css'
import data from '../data/data.js'
import Header from './Header'
import SearchBar from './SearchBar'
import Question from './Question'

export default function App() {


    const quizQuestions = data.map((item) => <Question  key = {item.id} {...item}/>)

    return (
        <div className='app--container'>
            <Header />
            <SearchBar />
            <div className='quiz-questions'>
                {quizQuestions}
            </div>
        </div>
    )
}