import { useState } from 'react'
import CardComponent from './Components/CardComponent'
import './App.css'

function App() {

  return (
    <>
      <header>
        <h1>Languages Lesson</h1>
      </header>
      <main>
        <button>HTML</button>
        <CardComponent />
      </main>
    </>
  )
}

export default App
