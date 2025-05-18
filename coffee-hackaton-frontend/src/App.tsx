import { useState } from 'react'
import sampleExercises from './fitnessData'

import './App.css'


const movementPatterns = ['upper pull', 'upper push', 'lower pull', 'lower push']



function App() {
  

  return (
    <main className='container'>
      <h1>Welcome to Fight Bytes</h1>

       {/* Dropdown for MovementPattern */}

      <form className='movement-pattern-form'>
        <label className='movement-pattern-dropdown'>
          Select your movement pattern
          <select>
            {movementPatterns.map (pattern => {
              return(
                <option>{pattern}</option>
              )
            })}
          </select>
        </label>
        <label className='movement-pattern-dropdown'>
          Select your exercise
          <select>
            {sampleExercises.map (exercise => {
              return(
                <option>{exercise.name}</option>
              )
            })}
          </select>
        </label>
        <button type='submit'>Submit</button>
      </form>
       {/* Dropdown for Exercise Selection */}

       {/* Input for weight */}
       



      

      
    </main>
  )
}

export default App
