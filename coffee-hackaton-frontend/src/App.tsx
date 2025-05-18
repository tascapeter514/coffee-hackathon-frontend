import { useState, useEffect } from 'react'
import type { Exercise } from './fitnessData'
import sampleExercises from './fitnessData'

import './App.css'


const movementPatterns = ['upper pull', 'upper push', 'lower pull', 'lower push']



function App() {

  const [exercises, setExercises] = useState<Exercise[]>([])
  

  const getExerciseData = async () => {
    try {
      const response = await fetch()

      if (response.status >= 200 && response.status < 300) {
        setExercises(response.data)

      } else {
        throw new Error('There was a problem fetching the exercsies')
      }

    } catch(err: any) {
      console.error('error fetching data:', err)
    }

  }

  useEffect(() => {
    getExerciseData()

  }, [])

  return (
    <main className='container'>
      <h1>Welcome to Fight Bytes</h1>

       {/* Dropdown for MovementPattern */}

      <form className='movement-pattern-form'>
        <label className='movement-pattern-dropdown'>
          Select your movement pattern
          <select>
            <option>Select a movement</option>
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
