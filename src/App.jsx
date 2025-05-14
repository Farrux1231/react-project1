import { useState } from 'react'
import MainRoutes from './pages'


function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='dark:bg-dark dark:text-white'>
    <MainRoutes/>
   </div>
      
  )
}

export default App
