import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        0
        <div className="App1">
            1
            <div className="App2">
                2
            </div>

            <div className="App3">
                3
                <div className="App4">
                    4
                </div>
            </div>
        </div>

        <div className="App5">
            5
            <div className="App6">
                6
            </div>

            <div className="App7">
                7
                <div className="App8">
                    8
                </div>
            </div>
        </div>
    </div>
  )
}

export default App
