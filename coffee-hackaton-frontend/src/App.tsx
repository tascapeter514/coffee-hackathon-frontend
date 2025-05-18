import { useState } from 'react'
import sampleExercises from './fitnessData'

import './App.css'

function App() {
  

  return (
    <>
      <h1>Welcome to Fight Bytes</h1>

       {/* Dropdown for MovementPattern */}

      <form className='movement-pattern-form'>
        <label className='movement-pattern-dropdown'>
          Select your movement pattern
          <select>
            <option></option>
          </select>
        </label>
        <button type='submit'>Submit</button>

      </form>
       {/* Dropdown for Exercise Selection */}
       {/* Input for weight */}
       



      

      
    </>
  )
}

export default App
