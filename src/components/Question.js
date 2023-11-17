import React,{useState} from 'react'

export default function Question(props) {
    // Mettre à jour la visibilité de la réponse 
    const [isAnswerVisible, setIsAnswerVisible] = useState(false);

    // Fonction appelé chaque fois que l'utilisateur clique sur une médaille pour modifier la visibilité de la réponse
    function handleClick() {
        setIsAnswerVisible(!isAnswerVisible);
    }


    return (
        <section className='question'>
            <img
                src={props.level}
                alt="question's difficulty"
                className='question--level'
                onClick={handleClick}
            />
            <h2>{props.question}</h2>
            {isAnswerVisible && <p className='question--answer'> {props.answer} </p>}
        </section>
    );
}