import { useState } from 'react'
import MainRoutes from './pages'
import { useStateValue } from './context'

function App() {
  const [count, setCount] = useState(0)
  const [state, dispatch] = useStateValue()
  return (
    <div className={state.bgColor === true ? "dark:bg-dark dark:text-white" : "dark-bg-white dark:text-black"}>
      <MainRoutes />
    </div>
  )
}

export default App
