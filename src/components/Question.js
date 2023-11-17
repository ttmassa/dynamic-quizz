import React, {useState} from 'react';


export default function Question(props) {
    const [showAnswer, setShowAnswer] = useState(false);

    const handleLevelClick = () => {
        setShowAnswer(!showAnswer);
    };

    return (
        <section className='question'>
            <img
                src={props.level}
                alt="question's difficulty"
                className='question--level'
                onClick={handleLevelClick}
            />
            <h2>{props.question}</h2>
            {showAnswer && <p className='question--answer'>{props.answer}</p>}
        </section>
    );
}
