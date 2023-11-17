import React from 'react';

export default function Question(props) {
    return (
        <section className='question'>
            <img
                src={props.level}
                alt="question's difficulty"
                className='question--level'
            />
            <h2>{props.question}</h2>
            <p>{props.answer}</p>
        </section>
    );
}
