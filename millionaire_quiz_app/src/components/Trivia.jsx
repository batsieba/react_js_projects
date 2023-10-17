import { useEffect, useState } from "react"

export default function Trivia({data, setTimeOut,questionNumber,setQuestionNumber}) {
  
    const [question,setQuestion] = useState(null);
    useEffect

    return (
    <div className="trivia">
        <div className="question">What is the best youtube channel?</div>
        <div className="answers">
            <div className="answer ">Lama Dev</div>
            <div className="answer">Great Stack</div>
            <div className="answer">Beta Squad</div>
            <div className="answer">Storniolo Brothers</div>
        </div>
    </div>
  )
}
