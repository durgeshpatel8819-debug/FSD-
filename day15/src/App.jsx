
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [questions, setQuestions] = useState([])
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState('')
  const [score, setScore] = useState(0)
  const [started, setStarted] = useState(false)
  const [finished, setFinished] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetch('/questions.json')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load questions')
        return res.json()
      })
      .then((data) => {
        setQuestions(data)
        setLoading(false)
      })
      .catch(() => {
        setError('Questions load nahi hue. Please try again.')
        setLoading(false)
      })
  }, [])

  const handleNext = () => {
    if (selected === '') return

    if (selected === questions[current].correct_answer) {
      setScore(score + 1)
    }

    if (current + 1 < questions.length) {
      setCurrent(current + 1)
      setSelected('')
    } else {
      setFinished(true)
    }
  }

  const restartQuiz = () => {
    setCurrent(0)
    setSelected('')
    setScore(0)
    setStarted(false)
    setFinished(false)
  }

  if (loading) {
    return <h2 className="message">Loading Quiz...</h2>
  }

  if (error) {
    return <h2 className="message">{error}</h2>
  }

  if (questions.length === 0) {
    return <h2 className="message">No questions available.</h2>
  }

  return (
    <div className="app">
      <div className="quiz-box">
        <h1>QuizMaster</h1>
        <p className="subtitle">Test Your React Knowledge!</p>

        {!started ? (
          <div className="welcome">
            <div className="quiz-icon">🧠</div>
            <h2>Welcome to React Quiz</h2>
            <p>
              Test your knowledge with {questions.length} multiple-choice
              questions.
            </p>
            <button onClick={() => setStarted(true)}>
              Start Quiz
            </button>
          </div>
        ) : finished ? (
          <div className="result">
            <div className="quiz-icon">
              {score >= questions.length / 2 }
            </div>
            <h2>Quiz Completed!</h2>
            <p className="score">
              {score} / {questions.length}
            </p>
            <p>
              {score === questions.length
                ? 'Excellent! Perfect Score!'
                : score >= questions.length / 2
                  ? 'Great job! Keep learning.'
                  : 'Keep practicing. You can do better!'}
            </p>
            <button onClick={restartQuiz}>Restart Quiz</button>
          </div>
        ) : (
          <div className="question-area">
            <div className="quiz-info">
              <span>
                Question {current + 1} of {questions.length}
              </span>
              <span>{questions[current].difficulty}</span>
            </div>

            <div className="progress">
              <div
                className="progress-fill"
                style={{
                  width: `${((current + 1) / questions.length) * 100}%`,
                }}
              ></div>
            </div>

            <p className="category">{questions[current].category}</p>

            <h2 className="question">
              {questions[current].question}
            </h2>

            <div className="options">
              {questions[current].options.map((option, index) => (
                <button
                  key={index}
                  className={`option ${
                    selected === option ? 'selected' : ''
                  }`}
                  onClick={() => setSelected(option)}
                >
                  <span className="option-letter">
                    {String.fromCharCode(65 + index)}
                  </span>
                  {option}
                </button>
              ))}
            </div>

            <button
              className="next-btn"
              onClick={handleNext}
              disabled={selected === ''}
            >
              {current === questions.length - 1
                ? 'Finish Quiz'
                : 'Next Question →'}
            </button>
          </div>
        )}
      </div>

      
    </div>
  )
}

export default App
