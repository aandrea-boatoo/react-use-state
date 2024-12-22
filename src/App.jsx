import { useState } from 'react'
import languages from './data/languages'
import CardComponent from './Components/CardComponent'
import Button from './Components/Button'
import './App.css'

function App() {
  const [activeButton, seActiveButton] = useState(null)
  const ButtonList = languages.map((el) => <Button key={el.id} id={el.id} title={el.title} />)
  return (
    <>
      <header>
        <h1>Languages Lesson</h1>
      </header>
      <main>
        <div className='ButtonList'>
          {ButtonList}
        </div>
        <CardComponent />
      </main>
    </>
  )
}

export default App
