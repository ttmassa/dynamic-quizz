import React from 'react';
// import or from '../assets/medaille-or.png'
// import argent from '../assets/medaille-argent.png'
// import bronze from '../assets/medaille-bronze.png'
import '../style.css';

export default function SearchBar() {
    return (
        <nav className='searchbar--container'>
            <input 
                className='searchbar--search' 
                type="text" 
                placeholder="Filter...🥇🥈🥉" 
            />
        </nav>
    );
}
