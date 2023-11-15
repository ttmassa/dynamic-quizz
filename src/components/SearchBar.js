import React from 'react';
import '../style.css';

export default function SearchBar() {
    return (
        <nav className='searchbar--container'>
            <input 
                className='searchbar--search' 
                type="text" 
                placeholder="Search" 
            />
        </nav>
    );
}
