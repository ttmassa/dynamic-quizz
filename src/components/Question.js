import React from 'react'

export default function Question(props) {
    return (
        <section>
            <h2>{props.question}</h2>
            <p>{props.answer}</p>
        </section>
    )
}